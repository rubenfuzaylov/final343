import Link from "next/link";

export default function Menubar() {
    return (
      <>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href=''>Midterm Part I - Expense</Link>
          </li>
          <li>
            <Link href=''>Midterm Part II Site</Link>
          </li>
        </ul>
      </>
    );
  }
  