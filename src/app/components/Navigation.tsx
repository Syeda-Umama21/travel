import Link from "next/link";
import Container from "@/app/components/Container";
const navItems = [
  {
    title: "Home",
    href: "/home",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Places",
    href: "/places",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
     <Container>
      <nav className="flex justify-between items-center py-6">
        <div className="font-bold text-xl skew-x-6">Next Tour</div>
        <ul className="hidden lg:flex gap-6">
          {navItems.map((nav) => (
            <li key={nav.title}>
              <Link
                href={nav.href}
                className="text-slate-600 hover:text-black hover:underline underline-offset-4"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-6 py-2.5 bg-pink-500 rounded-md text-white">
          Login
        </button>
      </nav>
    </Container>
  );
}
