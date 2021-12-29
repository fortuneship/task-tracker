import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    comment: {
        //backgroundColor: theme.palette.secondary.light,
         //background: theme.palette.primary.main,
        // border: 0,
        // borderRadius: 3,
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        // color: 'white',
        // height: 48,
        // padding: '0 30px',
        //...theme.secondary,
        // [theme.breakpoints.down('sm')]: {
        //     backgroundColor: theme.palette.success.main,
        // },
        // [theme.breakpoints.down('sm')]: {
        //     backgroundColor: theme.palette.flexGrow,
        // },
        color: theme.palette.secondary.light,
        textAlign: 'center'
      },
      
  }));


const DynamicValue = () => {
    const classes = useStyles();
    const title = 'Blog Post';
const body = 'This is my blog post';
const comments = [
    {id: 1, text: 'First comment'},
    {id: 2, text: 'Second comment'},
    {id: 3, text: 'Third comment'},
]

const loading = false;
const showComment = true;
if (loading) return <h1>Loading.....</h1>

    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>

           {/*  {showComment ? 'yes' : 'no'} */}
           {showComment && (
 <div className="comments">
 <h3 className={classes.comment}>Comments ({comments.length})</h3>
 <ul>
     {comments.map((comment, index) => (
         <li key={index}>{comment.text}</li>
     ))}
 </ul>
</div>
           )}

           
        </div>
    )
}

export default DynamicValue;
