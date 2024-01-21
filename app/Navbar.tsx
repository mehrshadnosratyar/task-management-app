"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentpage = usePathname();
  const manageList: { lable: string; path: string }[] = [
    { lable: "پنل کاربری", path: "/" },
    { lable: "لیست وظایف", path: "/taskpage" },
  ];
  return (
    <aside className="w-1/6 h-screen pt-12 space-y-7 overflow-hidden bg-case-200">
      <div className="text-center">
        <h1>کاربر</h1>
      </div>
      <ul className="flex flex-col gap-3">
        {manageList.map((item) => (
          <Link href={item.path} key={item.path}>
            <li
              className={`${
                item.path === currentpage ? "bg-slate-800" : "bg-inherit"
              } px-4 py-4 rounded-l-md hover:bg-slate-700 transition-all`}
            >
              {item.lable}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
