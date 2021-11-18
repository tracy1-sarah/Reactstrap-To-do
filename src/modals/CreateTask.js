import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';



const CreateTask = ({modal, toggle, save}) => {

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');

    const handleChange = (e) =>{
        const {name, value}= e.target;
         if (name === "title"){
             setTitle(value)
         }else{
             setTask(value)
         }
       

    }

    const handleSave =()=>{
        let taskObj = {}
        taskObj["Title"] = title
        taskObj["Task"] = task
        save(taskObj)
    }

    return ( 
        <div>
             <Modal isOpen = {modal}
    toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Add Task
    </ModalHeader>
    <ModalBody>
        <form>
            <div className = "form-group">
                <label>Title</label>
                <input name = "title" type = "text"  className = "form-control" value = {title} onChange = {handleChange} required/>

            </div>
            <div className ="form-group">
                <label>Task</label>
                <textarea name="task" rows = "5" className = "form-control" value =  {task} onChange = {handleChange} required></textarea>

            </div>

        </form>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={handleSave}
      >
        Create Task
      </Button>
      {' '}
      <Button color = "danger"
      onClick={toggle}>
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
        </div>
     );
}
 
export default CreateTask;