import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {z} from 'zod'

const taskSchema = z.object({
    title: z.string().min(1).max(255),
    discription:z.string().min(1),
    owner:z.number().min(1)
})

export async function POST(request :NextRequest){
    const body = await request.json()
    const validation = taskSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors,{status:400})
    const newTask = await prisma.task.create({
        data : {title:body.title , description:body.description , owner:body.owner}
    })
}