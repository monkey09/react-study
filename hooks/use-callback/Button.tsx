import { ReactNode, memo } from "react"

function Button(props: {handleClick: () => void, children: ReactNode}) {
  console.log(`Button clicked ${props.children}`)
  return (
    <div>
      <button onClick={props.handleClick}> {props.children} </button>
    </div>
  )
}
export default memo(Button)