import React from 'react';
import PlayerAPI from '../playerapi.js';
import { Link } from 'react-router-dom';


const Player = (props) =>{
    const player = PlayerAPI.get(
        parseInt(props.match.params.number,10)
    )
    if(!player){
        return <div>Sorry, but the player was not available!</div>
    }
    return (
        <div id='playerDiv'>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link class="btn btn-danger" to='/roster'>Back</Link>
        </div>
    )
}

export default Player;