export interface ButtonProp {
  children: React.ReactNode,
  clickHandler: (params: any) => any,
  variant?: 'primary' | 'secondary' | 'primary-outline' | 'primary-outline-hover-fill' | 'secondary-outline' | 'secondary-outline-hover-fill' | 'default',
  size?: 'sm' | 'md' | 'lg',
  width?: 'normal' | 'full',
  rounded?: 'none' | 'normal' | 'full'
}