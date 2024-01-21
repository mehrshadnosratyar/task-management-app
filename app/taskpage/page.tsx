import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import prisma from "@/prisma/client";

const TaskPage = async () => {
  const taskData = await prisma.task.findMany();
  return (
    <>
      <Button>
        <Link href={"/taskpage/new"}>ساخت تسک جدید</Link>
      </Button>
      <Table.Root variant="surface" mt={"6"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>عنوان تسک</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>شناسه صاحب تسک</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>وضعیت تسک</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>تاریخ تعریف تسک</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {taskData.map((task) => (
            <Table.Row key={task.id}>
              <Table.Cell>{task.title}</Table.Cell>
              <Table.Cell>{task.owner}</Table.Cell>
              <Table.Cell>{task.status}</Table.Cell>
              <Table.Cell>{task.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          praesentium odio tenetur deleniti quis amet autem temporibus
          recusandae incidunt impedit voluptatibus repudiandae quas eaque
          beatae, exercitationem ea quaerat eius distinctio?
        </p>
      </div>
    </>
  );
};

export default TaskPage;
