"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/taskSchema";
import BtnLoader from "@/app/components/btnLoader";

interface taskForm {
  title:string,
  description:string,
  owner:string | number,
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
  const [isSubmiting, setSubmiting] = useState(false);
  error ? setTimeout(() => setError(""), 4000) : null;
  return (
    <div className="max-w-2xl bg-neutral space-y-4 mx-auto mt-10 p-8 rounded-md">
      {error && (
        <div className="toast toast-start mb-10">
          <div className="alert alert-error">{error}</div>
        </div>
      )}
      <form
        className="space-y-10 text-center"
        onSubmit={handleSubmit(async (data) => {
          try {
            setSubmiting(true);
            if (typeof data.owner == "string")
              data.owner = parseInt(data.owner);
            await axios.post("/api/tasks", data);
            router.push("/taskpage");
          } catch (error) {
            setSubmiting(false);
            setError("مشکلی رخ داده لطفا دوباره اقدام کنید");
          }
        })}
      >
        <div>
          <input
            type="text"
            className="input input-primary w-1/2"
            placeholder="عنوان تسک"
            {...register("title")}
          />
        </div>
        {errors.title && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            عنوان تسک معتبر است
          </p>
        )}
        <div>
          <input
            type="number"
            className="input input-primary w-1/2"
            min={1}
            placeholder="شناسه دارنده تسک"
            {...register("owner")}
          />
        </div>
        {errors.owner && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            شناسه نامعتبر است
          </p>
        )}
        <div>
          <textarea
            className="textarea textarea-primary w-1/2"
            placeholder="توضیحات تسک"
            {...register("description")}
          />
        </div>
        {errors.description && (
          <p className="text-xs p-2 bg-red-200 rounded-md text-red-600 w-max">
            توضیحات تسک نامعتبر است
          </p>
        )}
        <button className="btn btn-secondary" disabled={isSubmiting}>
          افزودن تسک جدید
          {isSubmiting && <BtnLoader />}
        </button>
      </form>
    </div>
  );
};

export default NewTask;
