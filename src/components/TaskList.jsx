import Task from './Task'
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskList = () => {

    const { task } = useContext(TaskContext)

    if (!task || task.length === 0) {
        return <p style={{textAlign: 'center'}}>No Task Yet</p>
    }
    return (
        <div>
            {/* <div>List</div> */}
            {task.map((item) => (
               <Task key={item.id} item={item} />    
            ))}
        </div>
    )
}

export default TaskList;
