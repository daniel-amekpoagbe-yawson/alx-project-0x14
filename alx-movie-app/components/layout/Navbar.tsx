import { type NavLinkProps } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/router";

const NAVLINKS = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Posts",
    path: "/posts",
  },
  {
    title: "Users",
    path: "/users",
  },
] as const;

export default function Navbar() {
  return (
    <nav className="flex gap-2 w-fit items-center">
      {NAVLINKS.map((link) => (
        <NavLink key={link.path} {...link} />
      ))}
    </nav>
  );
}

export function NavLink({ path, title }: NavLinkProps) {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Link
      href={path}
      className={`rounded-md px-4 text-sky-600 py-1.5 hover:text-sky-600 hover:bg-slate-800 ${
        pathname === path ? " bg-slate-900" : "outline outline-sky-600"
      }`}
    >
      {title}
    </Link>
  );
}
