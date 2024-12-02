import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => <input ref={ref} {...props} />
);

Input.displayName = 'Input';

export default Input;