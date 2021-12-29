import React from 'react'
import { Button, makeStyles  } from '@material-ui/core'
import { useState } from 'react';
import Header from '../components/Header';
import DynamicValue from '../components/DynamicValue';
import TaskList from '../components/TaskList';
import TaskData from '../data/TaskData';
import TaskStat from '../components/TaskStat';

/* 
  const useStyles = makeStyles((theme) => ({
    button: {
        // background: theme.palette.primary.main,
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        //...theme.secondary
      },
  }));
 */

const Home = () => {
    const [task, setTask] = useState(TaskData);

   // const classes = useStyles()

    // const handleClick = () => {
    //     console.log('Hello there!');
    // }
    const deleteTask = (id) => {
        if(window.confirm('Are you sure you want to delete')){

            setTask(task.filter((item) => item.id !== id))
        }
    }

    return (
        <div>
            {/* <Button variant="contained" size="large" className={classes.button} onClick={handleClick} >Contained</Button> */}
            <Header/>
            <TaskStat task={task}/>
            {/* <DynamicValue /> */}
            <TaskList task={task} handleDelete={deleteTask}/>

        </div>
    )
}

export default Home
