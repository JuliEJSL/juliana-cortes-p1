import './CSS/TodoItems.css'
import tick from './Assests/icorrect.png'
import not_tick from './Assests/iempty-50.png'
import  cross from './Assests/icross.png'

const TodoItems = () => {
  return (
    <div>
      <div className='todoitems'>
        <div className='todoitems-container'>
          <img src={not_tick} alt='empty'/>
          <img src={tick} alt='correct'/>
          <div className='todoitems-text'></div>
        </div>
      </div>
      <img src= {cross} alt='red cross'/>
    </div>
  )
}

export default TodoItems
