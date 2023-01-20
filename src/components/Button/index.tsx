export type ButtonProps = {
  children: string,
  variant: 'primary' | 'secondary' | 'outline';
}

function Button({children,variant}: ButtonProps) {
  return(
   <button>{children}</button>
  )
}

export default Button;
