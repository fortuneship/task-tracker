import Task from './Task'

const TaskList = ({ task, handleDelete }) => {
    if (!task || task.length === 0) {
        return <p style={{textAlign: 'center'}}>No Task Yet</p>
    }
    return (
        <div>
            {/* <div>List</div> */}
            {task.map((item) => (
               <Task key={item.id} item={item} handleDelete={handleDelete}/>    
            ))}
        </div>
    )
}

export default TaskList;
