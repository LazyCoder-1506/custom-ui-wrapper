import { ButtonProp } from "./Button.type"

function Button({ children, clickHandler, variant = 'default', size = 'md', width = 'normal', rounded = 'normal' }: ButtonProp) {
  const variantStyle = (
    variant === 'primary' ? 'bg-primary text-white border-primary' : (
      variant === 'secondary' ? 'bg-secondary text-white border-secondary' : (
        variant === 'primary-outline' ? 'text-primary border-primary hover:bg-primary/10' : (
          variant === 'primary-outline-hover-fill' ? 'text-primary border-primary hover:bg-primary hover:text-white' : (
            variant === 'secondary-outline' ? 'text-secondary border-secondary hover:bg-secondary/10' : (
              variant === 'secondary-outline-hover-fill' ? 'text-secondary border-secondary hover:bg-secondary hover:text-white' : (
                'text-black hover:bg-gray-500/10 border-transparent'
              )
            )
          )
        )
      )
    )
  )

  const sizeStyle = (
    size === 'sm' ? 'text-sm px-3 py-1.5' : (
      size === 'lg' ? 'text-lg px-5 py-2.5' : (
        'px-4 py-2'
      )
    )
  )

  const widthStyle = (
    width === 'full' ? 'w-full' : ''
  )

  const roundedStyle = (
    rounded === 'none' ? '' : (
      rounded === 'full' ? 'rounded-full' : (
        'rounded-md'
      )
    )
  )
  
  return (
    <>
      <button className={`font-medium border-2 ${variantStyle} ${sizeStyle} ${widthStyle} ${roundedStyle}`} onClick={clickHandler}>
        {children}
      </button>
    </>
  )
}

export default Button