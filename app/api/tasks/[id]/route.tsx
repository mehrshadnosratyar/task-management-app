import { taskSchema } from "@/app/taskSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const updatedTask = await prisma.task.update({
    where: {
      id: parseInt(params.id),
    },
    data: {
      title: body.title,
      description: body.description,
      owner: body.owner,
    },
  });
  return NextResponse.json(updatedTask);
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const uniqeTask = await prisma.task.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(uniqeTask);
}

export async function DELETE(request: NextRequest,
  { params }: { params: { id: string } }) {
    await prisma.task.delete({where : {id : parseInt(params.id)}})
    return NextResponse.json("deleted" , {status : 200})
}
