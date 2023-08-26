export interface ModalProp {
  open: boolean,
  closeHandler: (params: any) => any,
  children: React.ReactNode,
  title?: string,
  width?: 'sm' | 'md' | 'lg',
  position?: 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right',
}