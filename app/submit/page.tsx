"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitPage() {
  const router = useRouter();
  const [type, setType] = useState<"idea" | "resource">("idea");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState<"Building" | "Under review" | "Completed">("Building");

  const handleTypeChange = (newType: "idea" | "resource") => {
    setType(newType);
    setTitle("");
    setDescription("");
    setCategory("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category) return;

    if (type === "idea") {
      const newIdea = {
        id: Math.random().toString(),
        title,
        description,
        status,
        category,
      };
      const stored = localStorage.getItem("custom_ideas");
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem("custom_ideas", JSON.stringify([...list, newIdea]));
      router.push("/ideas");
    } else {
      const newResource = {
        title,
        description,
        tag: category,
      };
      const stored = localStorage.getItem("custom_resources");
      const list = stored ? JSON.parse(stored) : [];
      localStorage.setItem("custom_resources", JSON.stringify([...list, newResource]));
      router.push("/resources");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-6 py-12">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Submit New
          </h1>
          <p className="text-sm text-zinc-400">
            Add a new startup idea or development resource to the platform.
          </p>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-6 space-y-6">
          <div className="flex gap-2 p-1 border border-zinc-800 bg-zinc-950/50 rounded-xl w-fit">
            {(["idea", "resource"] as const).map((t) => (
              <Button
                key={t}
                type="button"
                onClick={() => handleTypeChange(t)}
                variant={type === t ? "default" : "ghost"}
                size="sm"
                className="rounded-lg text-xs capitalize px-4"
              >
                {t}
              </Button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-400">Title</label>
              <Input
                placeholder={type === "idea" ? "AI Mock Interviewer" : "Cursor"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded-xl border-zinc-800 bg-zinc-950/20 text-xs h-9"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-400">Description</label>
              <Textarea
                placeholder={
                  type === "idea"
                    ? "Explain your idea in a short sentence..."
                    : "What is this tool used for..."
                }
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="rounded-xl border-zinc-800 bg-zinc-950/20 text-xs min-h-[80px]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-400">
                {type === "idea" ? "Category" : "Tag"}
              </label>
              <Input
                placeholder={type === "idea" ? "AI & Education" : "AI"}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border-zinc-800 bg-zinc-950/20 text-xs h-9"
              />
            </div>

            {type === "idea" && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400">Status</label>
                <div className="flex flex-wrap gap-2">
                  {(["Building", "Under review", "Completed"] as const).map((s) => (
                    <Button
                      key={s}
                      type="button"
                      onClick={() => setStatus(s)}
                      variant={status === s ? "default" : "outline"}
                      size="sm"
                      className="rounded-xl border-zinc-800 text-xs px-3"
                    >
                      {s}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button type="submit" className="w-full rounded-xl text-xs h-9 font-semibold mt-2">
              Publish
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
