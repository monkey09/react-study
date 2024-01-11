/*

    the main deff from useEffect that it will run before,
    the user see changes on the dom.

    good for ux but bad for performance

*/

/*
    useLayoutEffect: After DOM mutations, but before visual changes and before browser painting. 
    This means the user has to wait for your code. 

    useEffect: After DOM mutations, after visual changes, and after the browser has painted. 
    This means the user does not have to wait for your code.
*/

import { useEffect, useLayoutEffect } from "react"

const UseLayout = () => {
  useEffect(() => {
    console.log('1')
  }, [])

  useLayoutEffect(() => {
    console.log('2')
  }, [])

  // this gonna log 2 then 1
  return (
    <div></div>
  )
}