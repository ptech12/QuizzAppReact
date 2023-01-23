import React, { useState, useContext } from 'react'
import { QuizContext } from '../../../Helper/Contexts';
import "../../../App.css";


function Button({answer, options}) {
    const [isDisable, setIsDisable] = useState(true);
    // const [first, setfirst] = useState(second)
    const { score, setScore } = useContext(QuizContext);
    const { currQuestion, setCurrQuestion } = useContext(QuizContext)
    // setScore(0);
    // Destructuring
    // const { options } = props
    // console.log(options);

    
    const handleClick = (opt) => {
        console.log(`${opt} : ${answer}`);
        if (opt === answer) {
            setScore(score + 1);

        }
        setIsDisable(!isDisable);

        setCurrQuestion(currQuestion + 1)
    }

    return (
        <div className='btn'>
            {/* {option === 'end' && handleClick('')} */}
            <button className='btn1' disabled={isDisable ? false : true} onClick={() => handleClick(options.option1)}>{options.option1}</button>
            <button className='btn2' disabled={isDisable ? false : true} onClick={() => handleClick(options.option2)}>{options.option2}</button>
            <button className='btn3' disabled={isDisable ? false : true} onClick={() => handleClick(options.option3)}>{options.option3}</button>
            <button className='btn4' disabled={isDisable ? false : true} onClick={() => handleClick(options.option4)}>{options.option4}</button>
        </div>

    )
}

export default Button