import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Gupta Cold Storage",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-black dark:text-white">404</h1>
      <p className="mt-2 text-black/70 dark:text-white/70">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90"
      >
        Back to home
      </Link>
    </main>
  );
}
