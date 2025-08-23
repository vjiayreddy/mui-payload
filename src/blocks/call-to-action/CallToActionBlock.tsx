import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'
import RichTextEditor from '@/components/Shared/RitchTextEditor/RitchTextEditor'

export const CallToActionBlock: React.FC<CTABlockProps> = ({ richText }) => {
  return (
    <div className="container">
      hi
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichTextEditor className="mb-0" data={richText} enableGutter={false} />}
        </div>
      </div>
    </div>
  )
}
