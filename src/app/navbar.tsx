import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between align-center">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5 text-white">
          <Link href="/">
            <li
              className={`mr-6 ${
                pathname == "/" && "text-blue-500"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-6 ${
                pathname == "/about" && "text-blue-500"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-6 ${
                pathname == "/about/profile" && "text-blue-500"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button
          className="bg-white rounded-md text-sm px-3 h-7 cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}
