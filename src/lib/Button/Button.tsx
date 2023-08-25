import { ButtonProp } from "./Button.type"

function Button({ children, clickHandler, variant = 'default', size = 'md', width = 'normal', rounded = 'normal' }: ButtonProp) {
  const baseStyle = 'font-medium border-2';
  
  const variantStyle = (): string => {
    switch(variant) {
      case "primary":
        return 'bg-primary text-white border-primary';
      case "primary-outline":
        return 'text-primary border-primary hover:bg-primary/10';
      case "primary-outline-hover-fill":
        return 'text-primary border-primary hover:bg-primary hover:text-white';
      case "secondary":
        return 'bg-secondary text-white border-secondary';
      case "secondary-outline":
        return 'text-secondary border-secondary hover:bg-secondary/10';
      case "secondary-outline-hover-fill":
        return 'text-secondary border-secondary hover:bg-secondary hover:text-white'
      default:
        return 'text-black hover:bg-gray-500/10 border-transparent';
    }
  }

  const sizeStyle = (): string => {
    switch(size) {
      case "sm":
        return 'text-sm px-3 py-1.5';
      case "lg":
        return 'text-lg px-5 py-2.5';
      default:
        return 'px-4 py-2';
    }
  }

  const widthStyle = (): string => (
    width === 'full' ? 'w-full' : ''
  )

  const roundedStyle = (): string => {
    switch(rounded) {
      case "none":
        return '';
      case "full":
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  }
  
  return (
    <>
      <button type="button" className={`${baseStyle} ${variantStyle()} ${sizeStyle()} ${widthStyle()} ${roundedStyle()}`} onClick={clickHandler}>
        {children}
      </button>
    </>
  )
}

export default Button