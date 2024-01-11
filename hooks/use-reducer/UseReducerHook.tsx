import { useReducer } from "react"

interface State {
  name: string
  age: number
}

type Action = {
  type: 'increment'
} | {
  type: 'change'
  value: string
}

export const UseReducerHook = () => {
  const [state, dispatch] = useReducer((state: State, action: Action) => {
    if (action.type === 'increment') {
      return {...state, age: state.age + 1}
    } else if (action.type === 'change') {
      return {...state, name: action.value}
    }
    throw new Error('g')
  }, { name: 'hashim', age: 42 })

  return (
    <div>
      <input 
        value={state.name} 
        onChange={e => 
          dispatch({type: 'change', value: e.currentTarget.value})} 
      />
      <p>{state.name} - {state.age}</p>
      <button
        onClick={() => {
          dispatch({type: 'increment'})
        }}
      >
        click me
      </button>
    </div>
  )
}