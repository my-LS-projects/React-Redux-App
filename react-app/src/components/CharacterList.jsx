import React from 'react'

import { connect } from 'react-redux'
import CharacterCard from './CharacterCard'
 

const CharacterList = props => {
    return (
        <>
            <CharacterCard />
        </>
    )
}


const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    {}
)(CharacterList)