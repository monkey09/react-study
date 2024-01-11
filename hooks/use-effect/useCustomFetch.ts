import { useEffect } from "react"

export const useCustomFetch = ({id}: {id: number}) => {
  useEffect(() => {
    fetch(`https://hashim/${id}`)
  }, [id])
}