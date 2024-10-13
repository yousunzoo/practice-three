import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
       <div className="flex flex-col gap-4 p-5">
        <Link href='/first'>1주차</Link>
        <Link href='/second'>2주차</Link>
       </div>
      </main>
    </div>
  );
}
