import Parent1 from "./Parent1"
import { useContext } from "react"
import { CountContext } from "../App"

const GrandParent1 = () => {
    const countContext = useContext(CountContext);

    return (
        <div>
            <h1>GrandParent1 Count - {countContext.count}</h1>
            <Parent1 />
        </div>
    )
}
export default GrandParent1