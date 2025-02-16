import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
 import { clearCart } from "../utils/cartSlice";

const Cart = () => {

//BOTH CODE IS SAME OF CARTITEMS----->

   //(1)=>
   // const store = useSelector((store) => store);
   // const cartItems = store.cart.items;

   //(2)=>
   const cartItems = useSelector((store) => store.cart.items);
   //HOOK------>>
   const dispatch = useDispatch();
   const handleClearCart = () =>{
          dispatch(clearCart());
   }


   return (
      <div className="text-center m-4 p-4">
         <h1 className="text-2xl font-bold">Cart</h1>
         <div className="w-6/12 m-auto">
            <button
              className="p-2 m-2 bg-black text-white rounded-lg" 
              onClick={handleClearCart}
              >
                Clear Cart
            </button>
            {cartItems.length ===0 && (
               <h1 className=" text-sm font-bold"> Your Cart is empty 🥹.Please Add Items to the Cart 😆</h1>
            )}
            <ItemList items = {cartItems} />
         </div>
      </div>
   );
};


export default Cart;