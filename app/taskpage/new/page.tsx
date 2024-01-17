import { Button, TextArea, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'

const NewTask = () => {
  return (
    <div className='max-w-xl space-y-4'>
        <TextFieldRoot>
            <TextFieldInput size="3" placeholder='عنوان تسک' />
        </TextFieldRoot>
            <TextArea size="3" placeholder='توضیحات تسک' />
            <Button>افزودن تسک جدید</Button>
    </div>
  )
}

export default NewTask