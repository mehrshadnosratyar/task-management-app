"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const currentpage = usePathname()
    console.log(currentpage);
    const manageList:{lable:string,path:string}[] =[
        {lable:"پنل کاربری" , path:"/"},
        {lable:"لیست وظایف" , path:"/taskpage"}
    ]
  return (
    <aside className="w-1/6 h-screen p-5 pt-10 space-y-7">
        <div>
            <h1>کاربر</h1>
        </div>
        <ul className="flex flex-col gap-3">
            {manageList.map((item) => 
            <Link href={item.path} key={item.path}>
                <li className={`${item.path===currentpage ? 'bg-sky-500' : 'bg-sky-200'} p-2 py-3 rounded-l-3xl rounded-r-md hover:bg-sky-300 transition-all`}>
                    {item.lable}
                </li>
            </Link>)}
        </ul>
    </aside>
  )
}

export default Navbar