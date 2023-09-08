import { useEffect, useState } from "react"

export default function Users() {
    const [user, setData] = useState([])
    // const abc = () => { }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h3>Users : {user.length}</h3>
        </div>
    )
}
/**
 * Declare a state to hold the data
 * useEffect/useState wi8th call  back dependency array
 * 
*/