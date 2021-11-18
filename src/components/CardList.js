import React, {useState} from "react";
import EditTask from "../modals/EditTask";



const CardList = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false)


    const colors =[
        {
            primaryColor:  "#F9D288",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        },

    ]
    //  Delete Task
    const handleDelete = () =>{
        deleteTask(index)

    }
        // Edit Task
    const toggle =() =>{
        setModal(!modal)
    }

    const updateTask = (taskObj) => {
        updateListArray(taskObj, index)

    }


    return ( 
        <div className="card-wrapper mr-5">
            <div className="card-top" style ={{"backgroundColor" : colors[index%5].primaryColor}}></div>
            <div className =" task-holder">
            <span className ="card-header" style={{"backgroundColor" : colors[index%5].secondaryColor, "borderRadius" : "10px"}}>{taskObj.Title}</span>
            <p className="mt-3">{taskObj.Task}</p>

            <div style={{"position" : "absolute", "right" : "20px", "bottom": "20px"}}>
                <i className="far fa-edit" style={{"color": colors[index%5].primaryColor, "paddingRight" : "20px", "cursor" : "pointer"}} onClick={()=>setModal(true)}></i>
                <i className="fas fa-trash-alt" style={{"color":  colors[index%5].primaryColor, "cursor" : "pointer"}} onClick={handleDelete}></i>
            </div>
            </div>

            <EditTask modal = {modal} toggle={toggle} updateTask ={updateTask} taskObj = {taskObj} />

        </div>
     );
}
 
export default CardList;