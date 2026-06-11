"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Resource {
  title: string;
  description: string;
  tag: string;
}

const RESOURCES: Resource[] = [
  {
    title: "Cursor",
    description: "AI-first code editor for fast development.",
    tag: "AI",
  },
  {
    title: "Docker",
    description: "Containerize applications.",
    tag: "DevOps",
  },
  {
    title: "Vercel",
    description: "Lorem ipsum",
    tag: "Hosting",
  },
  {
    title: "Tailwind CSS",
    description: "Lorem ipsum",
    tag: "CSS",
  },
  {
    title: "Supabase",
    description: "Lorem ipsum",
    tag: "Database",
  },
  {
    title: "Resend",
    description: "Sample, check the ui and designm and formatting ehrae",
    tag: "Email",
  },
];

const TAGS = ["All", "AI", "DevOps", "Hosting", "CSS", "Database", "Email"] as const;

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>(RESOURCES);
  const [activeTag, setActiveTag] = useState<string>("All");

  useEffect(() => {
    const stored = localStorage.getItem("custom_resources");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setResources([...RESOURCES, ...parsed]);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const filteredResources = resources.filter(
    (r) => activeTag === "All" || r.tag === activeTag
  );

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            Useful Resources
          </h1>

          <p className="max-w-2xl text-sm text-zinc-400">
            A list of tools, platforms, and utilities to help builders launch faster.
          </p>
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <Button
                key={tag}
                onClick={() => setActiveTag(tag)}
                variant={activeTag === tag ? "default" : "outline"}
                size="sm"
                className="rounded-xl border-zinc-800 text-xs px-3"
              >
                {tag}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((res) => (
              <div
                key={res.title}
                className="flex items-start justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950/20 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/10"
              >
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-white">
                    {res.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-lg border-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400 font-medium"
                >
                  {res.tag}
                </Badge>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
