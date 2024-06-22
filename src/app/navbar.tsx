import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between align-center">
      <div className="flex items-center h-100">
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
        {status == "authenticated" ? (
          <div className="flex items-center justify-center">
            <Image
              src="/images/anime-profile.jpg"
              alt="Profile"
              width={50}
              height={50}
              className="w-10 h-10 rounded-full mr-3"
            />
            <h4 className="text-white mr-5">{session?.user.fullname}</h4>
            <button
              className="bg-white rounded-md text-sm px-3 h-7 cursor-pointer"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            className="bg-white rounded-md text-sm px-3 h-7 cursor-pointer"
            onClick={() => signIn()}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
