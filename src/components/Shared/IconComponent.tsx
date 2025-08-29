'use client'

import { Icon } from '@iconify/react'

export default function IconComponent({ icon, ...props }: { icon: string }) {
  if (!icon) return null
  return <Icon style={{ fontSize: 40 }} icon={icon} {...props} />
}
