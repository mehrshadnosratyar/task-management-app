import Link from "next/link";

const Newtaskbtn = () => {
  return (
    <Link href={"/taskpage/new"}>
      <button className="btn btn-primary">ساخت تسک جدید</button>
    </Link>
  );
};

export default Newtaskbtn;
