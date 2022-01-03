import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react';


const TaskContext = createContext();

export const TaskProvider = ({ children }) => {

    const [task, setTask] = useState([
        {
            id: 1,
            title: 'Title from context',
            text: 'This is a text from context',
            time: '1:00am'
        },
        {
            id: 2,
            title: 'Title from context 2',
            text: 'This is a text from context 2',
            time: '2:00am'
        },
        {
            id: 3,
            title: 'Title from context 3',
            text: 'This is a text from context 3',
            time: '3:00am'
        }
    ])

    const [taskEdit, setTaskEdit] = useState({
        item: {},
        edit: false,
    })

    const editTask = (item) => {
        setTaskEdit({
            item,
            edit: true
        })
    }

    const addTask = (newTask) => {
        newTask.id = uuidv4()
        setTask([newTask, ...task])
    }

    const deleteTask = (id) => {
        if(window.confirm('Are you sure you want to delete')){

            setTask(task.filter((item) => item.id !== id))
        }
    }

    return <TaskContext.Provider value={{ task, deleteTask, addTask, editTask }}>
        {children}
    </TaskContext.Provider>
}

export default TaskContext;