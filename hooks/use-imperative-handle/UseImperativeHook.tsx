import { ElementRef, forwardRef, useImperativeHandle, useRef, useState } from "react"

const ChildComponent = forwardRef<{increment: () => void}>((props, ref) => {
  const [count, setCount] = useState(0)

  useImperativeHandle(ref, () => ({
    increment () { setCount(prev => prev + 1)}
  }))

//   useImperativeHandle(ref, () => {
//     return {
//       increment:() => { setCount(prev => prev + 1)}
//     }
//   })

  return (
    <h1>{count}</h1>
  )
})

export const UseImperativeHook = () => {
  const ref = useRef<ElementRef<typeof ChildComponent>>(null)

  const handleClick = () => {
    ref.current?.increment()
  }

  return (
    <div>
      <ChildComponent ref={ref} />
      <button onClick={handleClick}>increment</button>
    </div>  
  )
}