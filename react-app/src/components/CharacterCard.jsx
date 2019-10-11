import React from 'react'


const CharacterCard =  ( { name, key, status, nickname, img, portrayed } ) => {
    return (
        <div className='character-card'>
            {/* {console.log('CARD PROPS: ', props)} */}
            <div className='image-wrapper'><img src={`${img}`} alt={`${name}`} className='character-image'></img></div>
            <h2>{name}</h2>
            <p>Status: {status} </p>
            <p>Nickname: "{nickname}"</p>
            <p>Portrayed by: {portrayed}</p>
        </div>
    )
}




export default CharacterCard