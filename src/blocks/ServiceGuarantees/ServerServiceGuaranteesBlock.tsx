import { ServiceGuaranteesBlock as ServerServiceGuaranteesBlockProps } from '@/payload-types'
import ServiceGuarantees from './ServiceGuarantees'

const ServiceGuaranteesBlock: React.FC<ServerServiceGuaranteesBlockProps> = (props) => {
  return <ServiceGuarantees {...props} />
}
export default ServiceGuaranteesBlock
