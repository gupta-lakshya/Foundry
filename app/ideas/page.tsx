import Navbar from "@/components/Navbar";
import { IdeaList } from "./components/IdeaList";

export default function IdeasPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Startup Ideas
          </h1>

          <p className="max-w-2xl text-sm text-zinc-400">
            A curated list of product concepts, active builds, and completed projects.
          </p>
        </section>

        <section>
          <IdeaList />
        </section>
      </main>
    </div>
  );
}
