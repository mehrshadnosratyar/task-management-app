import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'

const NewTask = () => {
  return (
    <div className='max-w-xl space-y-4'>
        <TextFieldRoot>
            <TextFieldInput placeholder='عنوان تسک' />
        </TextFieldRoot>
            <TextFieldRoot>
            <TextFieldInput placeholder='شناسه دارنده تسک' />
        </TextFieldRoot>
            <TextArea placeholder='توضیحات تسک' />
            <Button>افزودن تسک جدید</Button>
    </div>
  )
}

export default NewTask