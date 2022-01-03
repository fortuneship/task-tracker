import React from 'react'
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import TaskStat from '../components/TaskStat';
import TaskForm from '../components/TaskForm';
import { TaskProvider } from '../context/TaskContext';

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
    //const [task, setTask] = useState(TaskData);

   // const classes = useStyles()

    // const handleClick = () => {
    //     console.log('Hello there!');
    // }
   

    

    return (
        <TaskProvider>
        <div>
            {/* <Button variant="contained" size="large" className={classes.button} onClick={handleClick} >Contained</Button> */}
            <Header/>
            <TaskForm />
            <TaskStat />
            {/* <DynamicValue /> */}
            <TaskList />
        </div>
        </TaskProvider>
    )
}

export default Home
