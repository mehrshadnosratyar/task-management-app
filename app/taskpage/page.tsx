import { Button } from '@radix-ui/themes'
import Link from 'next/link'

const TaskPage = () => {
  return (
    <Button>
      <Link href={"/taskpage/new"}>
      ساخت تسک جدید 
      </Link>
    </Button>
  )
}

export default TaskPage