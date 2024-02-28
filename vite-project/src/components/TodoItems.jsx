import './CSS/TodoItems.css'
import tick from './Assests/tick.png'
import not_tick from './Assests/not_tick.png';
import  cross from './Assests/cross.png';

const TodoItems = ({no,display,text}) => {
  return (
   
      <div className='todoitems'>
        <div className='todoitems-container'>
          <img src={not_tick} alt='empty'/>
          <img src={tick} alt='correct'/>
          <div className='todoitems-text'>{text}</div>
        </div>
        <img src={cross} alt='red cross'/>
      </div>

  )
}

export default TodoItems
