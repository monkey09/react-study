import { ChangeEvent, useState, useTransition } from 'react'
import { generateProducts } from './data'
import {ProductList} from './ProductList'

export const UseTransitionHook = () => {
  const [isPending, startTransition] = useTransition()
  const [filterTerm, setFilterTerm] = useState('')
  const dummyProducts = generateProducts()

  const filterProducts = (filterTerm: string) => {
    if (!filterTerm) {
      return dummyProducts
    }
    return dummyProducts.filter((product) => product.includes(filterTerm))
  }

  const filteredProducts = filterProducts(filterTerm)

  const updateFilterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setFilterTerm(event.target.value)
    })
  }

  return (
    <>
      <input type="text" onChange={updateFilterHandler} />
      {isPending && <p>Updating List...</p>}
      <ProductList products={filteredProducts} />
    </>
  )
}