import React from 'react'
import Button from '../Button/Button'
import "../../../App.css";
function Card(props) {
  
  // console.log(question);

  // Destructuring
  const { question, options, answer } = props

  // const [isDisabled, setIsDisabled] = useState(false)
  // console.log(answer);


  return (
    <div className='Card'>
      <div className='question1'>
        <h4 className='question'>{question}</h4>
        <Button answer={answer} options={options}/>
      </div>



    </div>
  )
}

export default Card