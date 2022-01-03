import { Typography } from '@material-ui/core'
// import PropTypes from 'prop-types'
import { useContext } from 'react';
import TaskContext from '../context/TaskContext';


const TaskStat = () => {

    const { task } = useContext(TaskContext)

    return (
        <div>
            <Typography style={{textAlign: 'center', marginTop: 10}}>
                Total task: {task.length}
            </Typography>
        </div>
    )
}

// TaskStat.prototype = {
//     task: PropTypes.array.isRequired,
// }

export default TaskStat
