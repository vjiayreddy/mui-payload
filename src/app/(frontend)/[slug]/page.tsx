import React, { cache } from 'react'
import type { Metadata } from 'next'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { PayloadRedirects } from '@/components/Shared/PayloadRedirect/PayloadRedirects'
import { caller } from '@/trpc/server'
import { generateMeta } from '@/lib/utils/generateMeta'
import ProductHeroSlider from '@/components/Shared/ProductHeroSlider'

export async function generateStaticParams() {
  const pages = await caller.pages.getPages({
    select: {
      slug: true,
    },
  })
  const params = pages
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })
  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const result = await caller.pages.getPages({
    draft,
    limit: 1,
    overrideAccess: draft,
    slug,
  })

  return result?.[0] || null
})

export default async function Page({ params: paramsPromise }: Args) {
  // const { isEnabled: draft } = await draftMode();
  const { slug = 'home' } = await paramsPromise
  const url = '/' + slug

  const page: RequiredDataFromCollectionSlug<'pages'> | null = await queryPageBySlug({
    slug,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  return (
    <article>
      {/* <PageClient /> */}
      {/* Allows redirects for valid pages too */}
      {/* <HomeHeroSection/> */}
      <PayloadRedirects disableNotFound url={url} />
      {/* {draft && <LivePreviewListener />} */}
      {/* <RenderHero {...hero} /> */}
      <ProductHeroSlider />
      <RenderBlocks blocks={page?.layout} />
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = 'home' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page })
}
