import { useDebugValue, useState } from "react"

/*

    used to address custom hooks in the react dev tools

*/

export const useCustomHook = () => {
  const [test] = useState(true)
  useDebugValue(test ? 'Online' : 'Offline', value => value.toUpperCase())
  return test
}