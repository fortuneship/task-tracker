import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'


const TaskStat = ({ task }) => {
    return (
        <div>
            <Typography style={{textAlign: 'center', marginTop: 10}}>
                Total task: {task.length}
            </Typography>
        </div>
    )
}

TaskStat.prototype = {
    task: PropTypes.array.isRequired,
}

export default TaskStat
