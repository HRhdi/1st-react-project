import React from 'react'

const Social = props => (
    <div className='Social'>
        <div className='SocialContainer'>

            <div className='ContainerBtnSocial1'>
                <a href='https://www.linkedin.com/in/hafid-errachdi-74a68198/' target='_blank' rel='noopener noreferrer'>
                    <button>
                        <span className='SocialTextButton'>{props.socialname1}</span>
                    </button>
                </a>
            </div>

            <div className='ContainerBtnSocial2'>
                <a href='https://dribbble.com/HafidRhdi' target='_blank' rel='noopener noreferrer'>
                    <button className='BtnSocial2'>
                        <span className='SocialTextButton'>{props.socialname2}</span>
                    </button>
                </a>
            </div>

            <div className='ContainerBtnSocial3'>
                <a href='https://github.com/HRhdi' target='_blank' rel='noopener noreferrer'>
                    <button className='BtnSocial3'>
                        <span className='SocialTextButton'>{props.socialname3}</span>
                    </button>
                </a>
            </div>

        </div>
    </div>    
)

export default Social