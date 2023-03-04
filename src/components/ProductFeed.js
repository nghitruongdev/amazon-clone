import Product from "./Product"
import Image from 'next/image'
function ProductFeed({products}) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products && products.slice(0, 4).map((product) => (
        <Product key={product.id} {...product}/>
      ))}

        {/* <Image src="https://links.papareact.com/dyz" className="md:col-span-full" width="100%" height={150} objectFit="contain"/> */}
        <img src="https://links.papareact.com/dyz" className="md:col-span-full" alt="" />
 
 <div className="md:col-span-2">
    {products && products.slice(4,5).map((product)=> (
      <Product key={product.id} {...product} />
    ))
    }
 </div>

    {products && products.slice(5, products.length).map((product)=> (
      <Product key={product.id} {...product} />
    ))
    }

    </div>
)
}
export default ProductFeed
