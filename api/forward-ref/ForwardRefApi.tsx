import { HTMLProps, forwardRef, useRef } from "react"

/* 

    u can pass down props and ref to a nested child

*/

const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>((props, ref) => {
  return (
    <div>
      <input {...props} ref={ref} />
    </div>
  )
})

export const ForwardRefApi = () => {
  const ref = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (ref.current) {
      ref.current.focus()
    }
  }
  
  return (
    <div>
      <Input ref={ref} placeholder="hh" />
      <button onClick={handleFocus}>focus</button>
    </div>
  )
}