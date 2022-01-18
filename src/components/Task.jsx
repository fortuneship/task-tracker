import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Avatar, Container } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    display: 'flex',
    margin: 'auto', 
    marginTop: 20
    //alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    backgroundColor: red[500],
  },
  detail: {
      margin: '10px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '12px',
  },
  text: {
    fontWeight: 'light',
    fontSize: '12px',
},
time: {
    fontWeight: 'light',
    fontSize: '12px',
    marginTop: 10
},
}));

const Task = ({ item })  => {
  const classes = useStyles();
  const { deleteTask, editTask } = useContext(TaskContext)

  // const [title, setTitle] = useState('design');
  // const [text, setText] = useState('Final design delivery');
  // const [time, setTime] = useState('10am');
// const handleClick = (id) => {
//   console.log('del', id)
// }

 
  return (
        <Card className={classes.root}>
            <Container className={classes.container}>
            <Avatar aria-label="recipe" className={classes.avatar}>
                R
            </Avatar>
            
            <div className={classes.detail}>
            <Typography className={classes.title}>
            {item.title}
            </Typography>
            <Typography className={classes.text}>
            {item.text}
            </Typography>
            </div>
            <Typography className={classes.time}>
                {item.time}
            </Typography>
            <DeleteSharpIcon color='secondary' fontSize='small' onClick={() => deleteTask(item.id) }/>
            <EditIcon fontSize='small' onClick={() => editTask(item)} />
            </Container>          
        </Card>
  );
}

export default Task;
