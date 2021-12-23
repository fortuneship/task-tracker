import { Button, makeStyles  } from '@material-ui/core'
import React from 'react'


  const useStyles = makeStyles((theme) => ({
    button: {
        // background: theme.palette.primary.main,
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        ...theme.secondary
      },
  }));


const Home = () => {

    const classes = useStyles()

    const handleClick = () => {
        console.log('Hello there!');
    }

    return (
        <div>
            <Button variant="contained" size="large" className={classes.button} onClick={handleClick} >Contained</Button>
        </div>
    )
}

export default Home
