import './CSS/TodoItems.css'
import tick from './Assests/tick.png'
import not_tick from './Assests/not_tick.png';
import  cross from './Assests/cross.png';

const TodoItems = ({no,display,text, setTodos}) => {

  const deleteTodo = (no) => {
      // use no to delete data
      let data = JSON.parse(localStorage.getItem("todos"));
      data = data.filter((todo)=> todo.no!==no);
      setTodos(data);


  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length;i++)
    {
      if (data[i].no===no){
        if (data[i].display===""){
          data[i].display = "line-through";
        }
        // if display property is something else
        else
        {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  }


  return (
   
      <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
          {display==="" ? <img src={not_tick} alt='empty'/> : <img src={tick} alt='done'/>}
          <div className='todoitems-text'>{text}</div>
        </div>
        <img className='todoitems-cross-icon' onClick={()=>{deleteTodo(no)}} src={cross} alt='red cross'/>
      </div>

  )
}

export default TodoItems
