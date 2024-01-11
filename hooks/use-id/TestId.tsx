import { useEffect, useId } from "react"

export const TestId = () => {
  const id = useId()

  useEffect(() => {
    console.log(id)
  }, [])

  return (
    <div>hah</div>
  )
}