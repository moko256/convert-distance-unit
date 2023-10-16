import Link from "next/link";
import { PageClient } from "./page-client";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen justify-center">
      <div className="p-4 flex-1 max-w-screen-lg flex flex-col gap-4">
        <main className="flex-1">
          <PageClient />
        </main>
        <footer className="flex flex-row justify-end">
          <Link href="/about">About this page</Link>
        </footer>
      </div>
    </div>
  );
}
