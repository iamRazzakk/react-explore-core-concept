import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends() {
    const style = {
        border: "5px solid white",
        backgroundColor: "gray",
        borderRadius: "10px",
        color: "black"

    }
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div style={style}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div >
    )
}
/**
 * 1. to hold data,
 * 2. use effect with dependency array
 * 3. use fetch to load data
 * 4. set load data to state
 */