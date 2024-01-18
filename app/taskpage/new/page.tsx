"use client"
import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { date } from 'zod'

interface taskForm {
  title : string,
  description : string,
  owner : string|number
}
const NewTask = () => {
  const router = useRouter()
  const {register,handleSubmit} = useForm<taskForm>()
  return (
    <form className='max-w-xl space-y-4' onSubmit={handleSubmit(async (data) => {
      if( typeof data.owner == 'string')
       data.owner = parseInt(data.owner)
      await axios.post('/api/tasks',data);
      console.log("post shod");
      router.push('/taskpage')
    })}>
        <TextFieldRoot>
            <TextFieldInput placeholder='عنوان تسک' {...register("title")} />
        </TextFieldRoot>
            <TextFieldRoot>
            <TextFieldInput type='number' placeholder='شناسه دارنده تسک' {...register('owner')} />
        </TextFieldRoot>
            <TextArea placeholder='توضیحات تسک' {...register('description')} />
            <Button>افزودن تسک جدید</Button>
    </form>
  )
}

export default NewTask