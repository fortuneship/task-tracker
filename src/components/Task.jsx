import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Avatar, Button, Container } from '@material-ui/core';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    margin: 'auto', 
    marginTop: 20
    //alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: red[500],
    alignItems: 'center',
    marginTop: '10px',
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

const Task = ({ item, handleDelete })  => {
  const classes = useStyles();

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
            <DeleteSharpIcon color='secondary' fontSize='small' onClick={() => handleDelete(item.id) }/>
            </Container>          
        </Card>
  );
}

export default Task;
