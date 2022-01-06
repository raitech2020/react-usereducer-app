import { useReducer } from "react"

// reducer takes current state and an action and
// produces the new state
const reducer = (state, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload
    case "WITHDRAW":
      return state - action.payload
    default:
      return state
  }
}

export default function Bank() {
  // useReducer hook takes a reducer and an initial state
  // and produces the state and a dispatch function
  const [amount, dispatch] = useReducer(reducer, 500)

  // action creator creates an action and dispatches it
  const depositMoney = (amount) => {
    // create an action and dispatch
    const action = {
      type: "DEPOSIT",
      payload: amount,
    }
    dispatch(action)
  }

  // action creator
  const withdrawMoney = (amount) => {
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    })
  }

  return (
    <div>
      <h1>Initial Amount: {amount}</h1>
      <button
        onClick={() => {
          depositMoney(500)
        }}
      >
        Deposit Money
      </button>
      <button
        onClick={() => {
          withdrawMoney(100)
        }}
      >
        Withdraw Money
      </button>
    </div>
  )
}
