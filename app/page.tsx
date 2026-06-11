import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Founder OS
          </h1>

          <p className="max-w-2xl text-sm text-zinc-400">
            A minimalist workspace to organize startup ideas, useful tools, and
            resources for builders.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-sm font-bold text-white">
                LATEST IDEAS
              </h2>

              <Button
                asChild
                variant="link"
                size="sm"
                className="h-auto p-0 text-xs text-zinc-400 hover:text-white"
              >
                <Link href="/ideas">View All</Link>
              </Button>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-gray-600 p-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-gray">
                    AI Interview Coach
                  </h3>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-gray">
                    Building
                  </span>
                </div>
                <p className="text-xs">
                  AI-powered mock technical interviews with instant feedback.
                </p>
              </div>

              <div className="rounded-xl border border-gray-600 p-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-gray">
                    sample 1
                  </h3>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-gray">
                    Under review
                  </span>
                </div>
                <p className="text-xs">
                  AI-powered mock technical interviews with instant feedback.
                </p>
              </div>

              <div className="rounded-xl border border-gray-600 p-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-gray">
                    sample 2
                  </h3>
                  <span className="rounded-full border border-zinc-700 px-2 py-0.5 text-[10px] text-gray">
                    Completed
                  </span>
                </div>
                <p className="text-xs">
                  AI-powered mock technical interviews with instant feedback.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-sm font-bold text-white">
                USEFUL RESOURCES
              </h2>

              <Button
                asChild
                variant="link"
                size="sm"
                className="h-auto p-0 text-xs text-gray-400 hover:text-white"
              >
                <Link href="/resources">View All</Link>
              </Button>
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-xl border border-gray-500 p-4">
                <div>
                  <h3 className="text-sm font-semibold">
                    Cursor
                  </h3>

                  <p className="text-xs text-gray-400">
                    AI-first code editor for fast development.
                  </p>
                </div>

                <span className="rounded-lg border border-gray-400 px-2 py-0.5 text-[10px] text-gray-400">
                  AI
                </span>
              </div>

                            <div className="flex items-start justify-between gap-4 rounded-xl border border-gray-500 p-4">
                <div>
                  <h3 className="text-sm font-semibold">
                    Docker
                  </h3>

                  <p className="text-xs text-gray-400">
                    Containerize applications
                  </p>
                </div>

                <span className="rounded-lg border border-gray-400 px-2 py-0.5 text-[10px] text-gray-400">
                  AI
                </span>
              </div>

                            <div className="flex items-start justify-between gap-4 rounded-xl border border-gray-500 p-4">
                <div>
                  <h3 className="text-sm font-semibold">
                    Vercel
                  </h3>

                  <p className="text-xs text-gray-400">
                    AI-first code editor for fast development.
                  </p>
                </div>

                <span className="rounded-lg border border-gray-400 px-2 py-0.5 text-[10px] text-gray-400">
                  AI
                </span>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}