/*eslint-disable react/prop-types*/
import { useState} from 'react';

//destructuring the props {onSubmit} to avoid doing props.onSubmit on each use in the function
export function Form({onSubmit}) {
    
    const [newItem, setNewItem] = useState("");

    function handleSubmit(event) {
        event.preventDefault()
    
        //sets todos array (an array of objects) to the previous value as well as the new one added to the end
        if (newItem !== ""){
          onSubmit(newItem)
          setNewItem("") //clears input field
        }
        else {
            console.log("tried to submit empty form!")
            return;
        } 
      }
    
    
    return (
        <div className="container">

        <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
          <input value={newItem} onChange={ e => setNewItem(e.target.value)} type="text" id="item" />
          <button className="button">Add</button>
        </form>
      </div>
    )
}

export default Form;
