import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const shouldForwardProp = <CustomProps extends Record<string, any>>(
  props: Array<keyof CustomProps>,
  prop: PropertyKey,
): boolean => !props.includes(prop as string)

export const serviceList = [
  {
    id: '5777f551-aca2-4b94-8e55-f170fbb52d25',
    icon: 'Truck',
    title: 'Fast Delivery',
    description: 'Start from $10',
  },
  {
    id: '7ba08a7d-9f00-43be-a632-7d2123f95109',
    icon: 'MoneyGuarantee',
    title: 'Money Guarantee',
    description: '7 Days Back',
  },
  {
    id: '5a50c887-3bea-488f-be1c-0ecc216780fd',
    icon: 'AlarmClock',
    title: '365 Days',
    description: 'For free return',
  },
  {
    id: 'f2ad1b40-0aeb-4fb0-af34-1f2b475f89ed',
    icon: 'Payment',
    title: 'Payment',
    description: 'Secure system',
  },
]
