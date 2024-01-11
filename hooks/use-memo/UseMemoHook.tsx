import { useMemo } from "react"

/* 

  You want to use useMemo to save yourself from rerunning an expensive calculation to 
  generate a new value, and you want to use useCallback to store an existing value.

  dont use it unless the calc u r doing is slow and heavy

*/

const UseMemoHook = () =>{
  const test = useMemo(() => 5, [])

  return (
    <div></div>
  )
}