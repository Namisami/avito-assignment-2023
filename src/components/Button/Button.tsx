import './Button.css'

export interface ButtonProps extends React.PropsWithChildren {
  className?: string
  type?: string
  outline?: boolean
}

const Button = ({
  children,
  className,
  type='primary',
  outline=false,
}: ButtonProps) => {
  return (
    <button className={`${className} button button--${type} ${outline ? 'button--outline' : ''}`}>
      { children }
    </button>
  )
}

export default Button