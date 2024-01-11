export const ProductList = ({ products }: { products: any[] }) => {
  return (
    <ul>
      {products.map((product, i) => (
        <li key={i}>{product}</li>
      ))}
    </ul>
  )
}