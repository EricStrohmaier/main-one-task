import Link from "next/link";


export default function Home() {
  return (
    <main className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-center item-center">
      <div>Dashboard</div>
      <Link href={"/questions"}>
        <button className="p-3 bg-blue-300 rounded-2xl">Start</button>
      </Link>

    </main>
  )
}
