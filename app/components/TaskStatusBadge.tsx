import { Status } from "@prisma/client"

const statusMap: Record<Status , {lable: string,class:string }> ={
    OPEN: {lable:'Open',class:'badge badge-error'},
    IN_PROCESS:{lable:'In Progress',class:'badge badge-info'},
    CLOSED:{lable:"Closed" , class:'badge badge-success'}
}

const TaskStatusBadge = ({status} : {status :Status}) => {
  return (
    <p className={`${statusMap[status].class}`}>
        {statusMap[status].lable}
    </p>
  )
}

export default TaskStatusBadge