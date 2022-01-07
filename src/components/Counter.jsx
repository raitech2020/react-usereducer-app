import { useReducer } from "react"

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENT_BY_STEP: "increment-by-step",
  DECREMENT_BY_STEP: "decrement-by-step",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      }
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      }
    case ACTIONS.INCREMENT_BY_STEP:
      return {
        count: state.count + action.payload,
      }
    case ACTIONS.DECREMENT_BY_STEP:
      return {
        count: state.count - action.payload,
      }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  })

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  const incrementByStep = (step) => {
    dispatch({
      type: ACTIONS.INCREMENT_BY_STEP,
      payload: step,
    })
  }

  const decrementByStep = (step) => {
    dispatch({
      type: ACTIONS.DECREMENT_BY_STEP,
      payload: step,
    })
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </p>
      <p>
        <button onClick={() => incrementByStep(3)}>++</button>
        <button onClick={() => decrementByStep(2)}>--</button>
      </p>
      <h2>count: {state.count}</h2>
    </div>
  )
}

export default Counter
