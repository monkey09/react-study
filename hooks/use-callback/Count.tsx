import { memo } from "react"

function Count(props: {text: string; count: number}) {
  console.log("Count rendering")
  return (
    <div>
      {props.text} is {props.count}
    </div>
  )
}
export default memo(Count)