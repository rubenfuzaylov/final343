import Link from 'next/link';

export default function Menubar() {
  return (
    <nav className="bg-pink-600 p-4 shadow-md">
      <ul className="flex gap-4 justify-center text-white font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="https://exam1-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
            Midterm Part I - Expense
          </a>
        </li>
        <li>
          <a href="https://exam-1-part-2-three.vercel.app/" target="_blank" rel="noopener noreferrer">
            Midterm Part II Site
          </a>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}