import Link from "next/link";
import prisma from "@/prisma/client";

const TaskPage = async () => {
  const taskData = await prisma.task.findMany();
  return (
    <>
      <Link href={"/taskpage/new"}>
        <button className="btn btn-primary">ساخت تسک جدید</button>
      </Link>
      <table className="table table-zebra-zebra mt-10">
        <thead className="text-center">
          <tr className="text-lg">
            <th>عنوان تسک</th>

            <th>شناسه صاحب تسک</th>

            <th>وضعیت تسک</th>

            <th>تاریخ تعریف تسک</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {taskData.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.owner}</td>
              <td>{task.status}</td>
              <td>{task.createdAt.toDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskPage;
