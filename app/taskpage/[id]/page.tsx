import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const TaskDetailsPage = async ({ params }: { params: { id: string } }) => {
  const selectedTask = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!selectedTask) notFound();
  return (
    <section className="bg-base-200 h-max overflow-hidden p-14 mx-auto ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-2xl md:text-3xl text-primary bg-base-100 w-max p-2 md:p-5 rounded-lg">
          <h3>عنوان تسک :</h3>
          <h3>{selectedTask.title}</h3>
        </div>
        <div className="flex gap-3">
          <Link className="p-2 rounded-xl bg-secondary" href={`/taskpage/${params.id}/edit`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
            </svg>
          </Link>
          <Link className="p-2 rounded-xl bg-red-600" href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between my-10 text-xl">
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
          <span className="text-secondary">تاریخ تعریف تسک</span>
          <span className="text-accent">
            {selectedTask.createdAt.toDateString()}
          </span>
        </div>
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
          <span className="text-secondary">وضعیت تسک</span>
          <span className="text-accent">
            {<TaskStatusBadge status={selectedTask.status} />}
          </span>
        </div>
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
          <span className="text-secondary">شناسه صاحب تسک</span>
          <span className="text-accent">{selectedTask.owner}</span>
        </div>
      </div>
      <div className="space-y-8 p-5">
        <h4 className="w-max text-2xl text-primary">توضیحات تسک</h4>
        <p className="w-full h-40 overflow-auto rounded-xl p-6 bg-base-300 text-lg">
          {selectedTask.description}
        </p>
      </div>
    </section>
  );
};

export default TaskDetailsPage;
