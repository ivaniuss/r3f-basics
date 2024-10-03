import Image from "next/image";
import Link from "next/link";


const pages = [
  { name: "Basic Demo", href: "/basic-demo" },
  { name: "Spherical Word Cloud", href: "/spherical-word-cloud" },
]

export default function Home() {
  return (
      <main className="h-screen flex items-center justify-center">
        <ol className="flex flex-col gap-3">
          {pages.map((page) => (
            <li key={page.name} className="bg-slate-500 rounded p-2">
              <Link href={page.href}>{page.name}</Link>
            </li>
          ))}          
        </ol>
      </main>
  );
}
