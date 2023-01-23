import React from 'react'
import { QuizContext } from '../../../Helper/Contexts'
import "../../../App.css";

function Banner() {
    const {score} = React.useContext(QuizContext)
    return (
        <div className='Banner'>
            <h4>You have answered {score}/5 correctly</h4>
        </div>
    )
}

export default Banner