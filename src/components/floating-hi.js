import React from 'react'

const FloatingHi = props => (
    <span role='img' aria-label=":sup:" data-balloon-pos="up">
        <div className='ContainerFloatingHi'>
            <div alt='Hello' className='FloatingHi'>
                <img alt='Hello' src={props.image} />
            </div>
        </div>
    </span>
)

export default FloatingHi
