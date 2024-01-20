"use client";
import {
  Button,
  TextArea,
  TextFieldInput,
  TextFieldRoot,
  Callout,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/taskSchema";
import BtnLoader from "@/app/components/btnLoader";
import { boolean } from "zod";

interface taskForm {
  title: string;
  description: string;
  owner: number;
}
const NewTask = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskForm>({
    resolver: zodResolver(taskSchema),
  });
  const [error, setError] = useState("");
  const [isSubmiting,setSubmiting] = useState(false)
  error ? setTimeout(() => setError(""), 3000) : null;
  return (
    <div className="max-w-2xl space-y-4 mx-auto mt-40 bg-sky-100 p-8 rounded-md">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error} </Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmiting(true)
            if (typeof data.owner == "string")
            data.owner = parseInt(data.owner);
          await axios.post("/api/tasks", data);
          router.push("/taskpage");
          } catch (error) {
            setSubmiting(false)
            setError("مشکلی رخ داده لطفا دوباره اقدام کنید");
          }
        })}
      >
        <TextFieldRoot>
          <TextFieldInput placeholder="عنوان تسک" {...register("title")} />
        </TextFieldRoot>
        {errors.title && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            عنوان تسک نامعترب است
          </p>
        )}
        <TextFieldRoot>
          <TextFieldInput
            type="number"
            min={1}
            placeholder="شناسه دارنده تسک"
            {...register('owner')}
          />
        </TextFieldRoot>
        {errors.owner && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            شناسه نامعتبر است
          </p>
        )}
        <TextArea placeholder="توضیحات تسک" {...register("description")} />
        {errors.description && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            توضیحات تسک نامعتبر است
          </p>
        )}
        <Button disabled={isSubmiting}>
          افزودن تسک جدید
          {isSubmiting && <BtnLoader/>}
        </Button>
      </form>
    </div>
  );
};

export default NewTask;
