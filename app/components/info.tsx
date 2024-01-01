'use client'
import { Product } from "../../types";
import React, { MouseEventHandler } from "react";
import Currency from "./ui/currency";
import Button from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
interface InfoProps {
   data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
   const cart = useCart();
   const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      cart.addItem(data);
   };
   return (
      <div>
         <h1 className="text-3xl font-bold text-gray-900">{data?.name}</h1>
         <div className="mt-3 flex itmes-end justify-between ">
            <p className="text-2xl text-gray-900">
               <Currency value={data?.price} />
            </p>
         </div>
         <hr className="my-4" />
         <div className="">
            <div className="flex items-center gap-x-4">
               <h3 className="font-semibold text-black">Size:</h3>
               <div className="">{data?.size?.name}</div>
            </div>
            <div className="flex items-center gap-x-4">
               <h3 className="font-semibold text-black">Color:</h3>
               <div
                  className="h-6 w-6 rounded-full border"
                  style={{ backgroundColor: data?.color?.value }}
               />
            </div>
         </div>
         <div className="mt-10 flex items-center gap-x-3" >
            <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
               Add to cart
               <ShoppingCart />
            </Button>
         </div>
      </div>
   );
};

export default Info;
