import { InputComponent } from './Input.styled.js'

interface InputProps {
  type?: string
  placeholder?: string
  value: string
  disabled?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  disabled = false,
  onChange,
}: InputProps) => {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default Input
