import { useState } from "react";

export default function Counter({ start }) {
    const [count, setCount] = useState(start);
    const plus = () => { setCount(count + 1); };
    return (<button onClick={plus}>{count}</button>);
}