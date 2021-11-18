import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';



const EditTask = ({modal, toggle, updateTask, taskObj}) => {

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

    useEffect(() =>{
        setTitle(taskObj.Title)
        setTask(taskObj.Task)
    },[taskObj.Task, taskObj.Title])


    const handleUpdate =(e)=>{
        e.preventDefault();
        let tempObj = {}
        tempObj['Title'] = title
        tempObj['Task'] = task
        updateTask(tempObj)
       
    }

    return ( 
        <div>
             <Modal isOpen = {modal}
    toggle={toggle}
  >
    <ModalHeader toggle={toggle}>
      Update Task
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
        onClick={handleUpdate}
      >
        Update
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
 
export default EditTask;