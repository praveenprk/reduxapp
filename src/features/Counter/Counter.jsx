import { useDispatch, useSelector } from "react-redux"
import { add, subtract } from "./counterSlice"

const Counter = () => {

  //previously, we did const [count, setCount] = useState(0)
  //useSelector() to access state
  //consider this as count variable from the destructured array
  const count = useSelector((state) => state.count.count)

  //useDispatch() to update state
  //consider this as setCount() from the destructured array
  const dispatch = useDispatch()

  return (
      <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => dispatch(add())}>Inc.</button>
        <button onClick={() => dispatch(subtract())}>Dec.</button>
      </>
  )
}

export default Counter