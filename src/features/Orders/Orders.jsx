import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./ordersSlice"

const Orders = () => {

    const [cart, setCart] = useState('')
    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(100)

    const bag = useSelector((state) => state.orders.bag)
    const total = useSelector((state) => state.orders.total)
    const dispatch = useDispatch()


  return (
    <>
        <div>Orders</div>
        <input type="text" value={cart} placeholder="Add Item name"
        onChange={(e) => setCart(e.target.value)}/>
        <input type="number" value={qty} placeholder="Add Qty"
        onChange={(e) => setQty(e.target.value)}/>
        <input type="number" value={price} placeholder="Add Price"
        onChange={(e) => setPrice(e.target.value)}/>
        <button onClick={() => dispatch(addToCart({cart, qty, price}))}>Add To Cart</button>


        <p>My Cart</p>
        <table>
            <th>Name</th>
            <th>Qty</th>
            {bag.map((item, index) => (
                <>
                    <tr>
                        <td>{item.cart}</td>
                        <td>{item.qty}</td>
                    </tr>
                </>
            ))}
        </table>
    </>
  )
}

export default Orders