import Link from "next/link";
import prisma from "@/prisma/client";
import TaskStatusBadge from "../components/TaskStatusBadge";
import Newtaskbtn from "./Newtask";


const TaskPage = async () => {
  const taskData = await prisma.task.findMany();
  return (
    <>
      <Newtaskbtn/>
      <table className="table table-zebra-zebra mt-10">
        <thead className="text-center">
          <tr className="text-lg">
            <th>عنوان تسک</th>

            <th>شناسه صاحب تسک</th>

            <th className="hidden md:table-cell">وضعیت تسک</th>

            <th className="hidden lg:table-cell">تاریخ تعریف تسک</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {taskData.map((task) => (
            <tr key={task.id}>
              <td className="space-y-1">
                {task.title}
                <p className="md:hidden">{task.status}</p>
                </td>
              <td>{task.owner}</td>
              <td className="hidden md:table-cell"><TaskStatusBadge status={task.status} /></td>
              <td className="hidden lg:table-cell">{task.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskPage;
