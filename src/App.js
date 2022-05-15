import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }


  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default App
