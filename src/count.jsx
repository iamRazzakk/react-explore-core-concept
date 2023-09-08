import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div style={{border: "2px solid yello"}}>
            <h1>Counter: </h1>
        </div>
    )
}