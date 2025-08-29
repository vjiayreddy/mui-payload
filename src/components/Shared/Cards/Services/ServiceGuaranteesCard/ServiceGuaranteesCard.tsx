'use client'
import IconComponent from '@/components/Shared/IconComponent'
import { StyledRoot } from './styled'
import type { ServiceGuaranteesBlock } from '@/payload-types'

type ServiceGuaranteesCardProps = NonNullable<ServiceGuaranteesBlock['services']>[number]

const ServiceGuaranteesCard = ({ title, description, iconName }: ServiceGuaranteesCardProps) => {
  return (
    <StyledRoot>
      <IconComponent icon={iconName} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </StyledRoot>
  )
}
export default ServiceGuaranteesCard
