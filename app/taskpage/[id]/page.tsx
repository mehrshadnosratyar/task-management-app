import TaskStatusBadge from "@/app/components/TaskStatusBadge";
import prisma from "@/prisma/client";
import { notFound} from "next/navigation";

const TaskDetailsPage = async ({ params }: { params: { id: string } }) => {
  const selectedTask = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!selectedTask) notFound();
  return (
    <>
    <section className="bg-base-200 h-max overflow-hidden p-14 mx-auto ">
      <div className="flex gap-4 mb-8 text-2xl md:text-3xl text-primary bg-base-100 w-max p-2 md:p-5 rounded-lg">
        <h3>عنوان تسک :</h3>
        <h3>{selectedTask.title}</h3>
      </div>
      <div className="flex flex-col gap-10 md:flex-row justify-between my-10 text-xl">
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
          <span className="text-secondary">تاریخ تعریف تسک</span>
        <span className="text-accent">{selectedTask.createdAt.toDateString()}</span>
        </div>
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
        <span className="text-secondary">وضعیت تسک</span>
        <span className="text-accent">{<TaskStatusBadge status={selectedTask.status} />}</span>
        </div>
        <div className="flex justify-between gap-3 md:justify-normal md:gap-5">
        <span className="text-secondary">شناسه صاحب تسک</span>
        <span className="text-accent">{selectedTask.owner}</span>
        </div>
      </div>
      <div className="space-y-8 p-5">
        <h4 className="w-max text-2xl text-primary">توضیحات تسک</h4>
        <p className="w-full h-40 overflow-auto rounded-xl p-6 bg-base-300 text-lg">{selectedTask.description}</p>
      </div>
    </section>
    </>
  );
};

export default TaskDetailsPage;
