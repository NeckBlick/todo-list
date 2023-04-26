import { BsTrash3Fill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import "./style.css";

const task = ({ task, onDelete}) => {
  
  
  return (
    <div className="container-task">

        {task.isCompleted ? (
          <AiFillCheckCircle  />
        ) : (
          <div className="complete" >
            {" "}
          </div>
        )}
      <h1
        className={!task.isCompleted ? "title" : "completed"}
        
      >
        {task.title}
      </h1>
      <div className="delete" onClick={() => onDelete(task.id) }>
        <BsTrash3Fill />
      </div>
    </div>
  );
};

export default task;
