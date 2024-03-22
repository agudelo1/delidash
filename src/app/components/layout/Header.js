import Link from "next/link";

export default function Header(){
    return(
        <header className="flex items-center justify-between">
        <Link className="font-semibold text-2xl" href="">Deli<span className="text-primary">Dash</span></Link>
        <nav className="flex gap-4 items-center text-gray-500 font-semibold">
          <Link href={''}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
          <Link href={''} className="bg-primary rounded-full text-white px-8 py-2 hover:bg-white hover:text-primary ">Login</Link>
        </nav>
      </header>
    );
}