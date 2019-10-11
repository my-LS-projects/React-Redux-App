import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { fetchCharacters } from '../actions'

import CharacterCard from './CharacterCard'
 

const CharacterList = props => {
    useEffect(() => {
        console.log('triggered')
        props.fetchCharacters()
    },[])
    if (props.isFetching) {
        return <h2>Loading...</h2> 
    }  
    return (
        <>
            {props.error && <p>{props.error}</p>}
            {props.characters.map(character => 
            <CharacterCard 
            name={character.name} 
            status={character.status} 
            nickname={character.nickname} 
            key={character.char_id} 
            img={character.img}
            portrayed={character.portrayed}
            />)}
        </>
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacters }
)(CharacterList)