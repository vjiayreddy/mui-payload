'use client'
import { ServiceGuaranteesBlock as ServiceGuaranteesProps } from '@/payload-types'
import { Box, Container } from '@mui/material'
import { RootStyle } from './styled'
import ServiceGuaranteesCard from '@/components/Shared/Cards/Services/ServiceGuaranteesCard/ServiceGuaranteesCard'

const ServiceGuarantees: React.FC<ServiceGuaranteesProps> = ({ services }) => {
  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.palette.grey[200]}`,
        boxShadow: theme.shadows[1],
        backgroundColor: theme.palette.common.white,
      })}
    >
      <Container>
        <RootStyle>
          {services.map(({ id, iconName, title, description }) => (
            <ServiceGuaranteesCard
              key={id}
              iconName={iconName}
              title={title}
              description={description}
            />
          ))}
        </RootStyle>
      </Container>
    </Box>
  )
}
export default ServiceGuarantees
