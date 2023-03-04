import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import CurrencyFormat from "react-currency-format"
const MAX_RATING = 5
const MIN_RATING = 1
function Product({id, category, title, image, price, description}) {

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    )

  const [hasPrime] = useState(
    Math.random() < 0.5
  )

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 ">
      <p className="absolute top-2 right-2 text-sm italic text-gray-400 mb-3">{category}</p>

      <Image src={image} width={200} height={200} objectFit="contain"/>
   
    <h4 className="my-3 ">{title}</h4>
    
    <div className="flex">
      {Array(rating)
      .fill()
      .map((_, i) => <StarIcon className="h-5 text-yellow-500"/>)}
    </div>

        <p className="text-xs my-2 line-clamp-2">{description}</p>

<CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <div className="mb-2">{value}</div>} />

{hasPrime && (
  <div className="flex items-center space-x-2 mb-2">
    <img src="https://links.papareact.com/fdw" alt="" loading="lazy" className="h-12"/>
   <p className="text-xs text-gray-500">Free Next-day Delivery</p>
  </div>
)}

<button className="mt-auto button">Add to Basket</button>
    </div>
  )
}
export default Product