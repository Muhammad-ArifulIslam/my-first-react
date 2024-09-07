import { useState } from "react"

export default function Team (){

    const [team, setTeam] = useState(15);

    const handleAdd = () => {

        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemove = () => {

        const newTeam = team - 1;
        setTeam(newTeam);
    }

    const teamStyle = {

        border: '2px solid purple',
        margin: '12px',
        padding: '12px',
        borderRadius: '12px',
    }

    return(
        <div style = {teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick = {handleAdd}>Add Player</button>
            <button onClick = {handleRemove}>Remove Player</button>
        </div>
    )

}