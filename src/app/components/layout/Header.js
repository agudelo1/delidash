"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const session = useSession();
  const status = session.status;
 
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-4 items-center text-gray-500 font-semibold">
        <Link className="font-semibold text-2xl" href={"/"}>
          Deli<span className="text-primary">Dash</span>
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>

      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === "authenticated" && (
          <button onClick={()=> signOut()} className="bg-primary rounded-full text-white px-8 py-2 hover:bg-white hover:text-primary ">
            Logout
          </button>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href="/login"> Login</Link>
            <Link
              href={"/register"}
              className="bg-primary rounded-full text-white px-8 py-2 hover:bg-white hover:text-primary "
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
