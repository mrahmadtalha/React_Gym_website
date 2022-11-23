import { useState } from 'react'
import{AiOutlinePlus} from 'react-icons/ai'
import{AiOutlineMinus} from 'react-icons/ai'


const FAQ = ({question,answer}) => {
    const [IsAnswerShowing,setIsAnswerShowing] = useState(false)

  return (
    <div className="faq" onClick={() => setIsAnswerShowing(prev=> !prev)}>
        <div>
            <h4>{question}</h4> 
            <button className="faq__icon">
                {
                    IsAnswerShowing ? <AiOutlineMinus/>  : <AiOutlinePlus/> 
                }
                             </button>
        </div>
    {IsAnswerShowing &&    <p>{answer}</p>} 
    </div>
  )
}

export default FAQ