import React from 'react'

const Card = props => (
    <div className='Card'>
        <img alt='Study Case Background' src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.section}</p>
    </div>
)

export default Card