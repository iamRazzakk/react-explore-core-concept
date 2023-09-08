import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11)
    const AddClick = () => {
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const removeClick = () => {
        const removePlayer = team - 1
        setTeam(removePlayer)
    }
    const TeamStyle = {
        border: "2px solid red",
        margin: "15px",
        padding: "15px",
        borderRadius: "15px"
    }
    return (
        <div style={TeamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={AddClick}>Add</button>
            <button onClick={removeClick}>Remove</button>
        </div>
    )
}