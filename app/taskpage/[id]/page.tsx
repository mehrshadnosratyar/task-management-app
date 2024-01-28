import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteBtn from "./DeleteBtn";

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
          <DeleteBtn params={params} />
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
