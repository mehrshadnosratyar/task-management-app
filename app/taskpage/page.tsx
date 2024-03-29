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
          <tr className="text-xl">
            <th>عنوان تسک</th>
            <th>شناسه صاحب تسک</th>
            <th className="hidden md:table-cell">وضعیت تسک</th>
            <th className="hidden lg:table-cell">تاریخ تعریف تسک</th>
          </tr>
        </thead>
        <tbody className="text-center text-lg">
          {taskData.map((task) => (
            <tr key={task.id}>
              <td className="flex flex-col gap-3 link-primary">
              <Link href={`/taskpage/${task.id}`}>
                {task.title}
              </Link>
                <p className="md:hidden"><TaskStatusBadge status={task.status} /></p>
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
