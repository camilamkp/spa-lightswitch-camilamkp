import React, { useState } from 'react';

const Room = () => {
    
    const [ lightStatus, setlightStatus ] = useState(false)
    
    const statusRoom = () =>
    {
        if( lightStatus )
        {
            setlightStatus(false);

        }
        else
        {
            setlightStatus(true);
        }
        
    }
    return (
        <div className={ lightStatus ? 'lit' : 'dark' }>

            <p>The room is { lightStatus ? 'lit' : 'dark' }</p>

            <button onClick= { statusRoom }> Lightswitch </button>
        </div>
    )
}

export default Room
