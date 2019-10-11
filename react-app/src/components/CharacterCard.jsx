import React from 'react'


const CharacterCard =  ( { name, key, status, nickname, img } ) => {
    return (
        <div className='character-card'>
            {/* {console.log('CARD PROPS: ', props)} */}
            <img src={`${img}`} alt={`${name}`} className='character-image'></img>
            <h2>{name}</h2>
            <ul>
                <li>Occupation:</li>
            </ul>
            <p>Status: {status} </p>
            <p>Nickname: "{nickname}"</p>
            <p>portrayed by: </p>
        </div>
    )
}




export default CharacterCard