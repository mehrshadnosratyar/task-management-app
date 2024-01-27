import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { taskSchema } from "@/app/taskSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const newTask = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      owner: body.owner,
    },
  });
  return NextResponse.json(newTask, { status: 201 });
}
export async function PUT(request: NextRequest) {
  const body = await request.json();
  const validation = taskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const updatedTask = await prisma.task.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      description: body.description,
      owner: body.owner,
    },
  });
}
