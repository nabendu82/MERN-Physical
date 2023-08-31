import Child1 from "./Child1"
import { useContext } from "react"
import { CountContext } from "../App"

const Parent1 = () => {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h1>Parent1 Count - {countContext.count}</h1>
            <button onClick={() => countContext.dispatch('increment')}>Increment</button>
            <button onClick={() => countContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.dispatch('reset')}>Reset</button>
            <Child1 />
        </div>
    )
}
export default Parent1