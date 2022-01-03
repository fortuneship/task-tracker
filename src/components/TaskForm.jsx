import { Box, Button, Card, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useState, useContext, useEffect } from 'react';
import TaskContext from '../context/TaskContext';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        alignContent: 'center',
        margin: 'auto',
       // height: 200,
        marginTop: 20,
    },
    cardContent: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        minHeight: 200,
      },
      text: {
          marginBottom: 20,
      }
    
  }));

const TaskForm = () => {
    const classes = useStyles();

    const { addTask, taskEdit, updateTask } = useContext(TaskContext)

    
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

   useEffect(() => {
      if(taskEdit.edit === true) {
          setTitle(taskEdit.item.title)
          setText(taskEdit.item.text)
      }
   }, [taskEdit])
    
   
    const handleClick = (e) => {
        //console.log('click...')
        e.preventDefault();
        if (title && text != ''){
            const newTask = {
                title,
                text
            }

            if (taskEdit.edit === true) {
                updateTask(taskEdit.item.id, newTask)
            }else{

                addTask(newTask);
                
            }
            setTitle('');
            setText('');
        }
    }

   
    return (
        <div>
            <Card className={classes.root}>
            <Typography color="textPrimary" gutterBottom variant="h6" align='center'>Add form</Typography>
            
            <form className={classes.cardContent} noValidate autoComplete="off">
                <TextField className={classes.text}
                    id="filled-secondary"
                    label="Title"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <TextField className={classes.text}
                    id="filled-secondary"
                    label="Text"
                    variant="filled"
                    color="secondary"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <Button color="secondary" variant="contained" onClick={handleClick}>Add Task</Button>
            </form>
            </Card>
        </div>
    )
}

export default TaskForm
