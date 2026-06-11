"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IdeaCard } from "./IdeaCard";
import { Idea } from "../types";

const INITIAL_IDEAS: Idea[] = [
  {
    id: "1",
    title: "AI Interview Coach",
    description: "AI-powered mock technical interviews with instant feedback.",
    status: "Building",
    category: "AI & Education",
  },
  {
    id: "2",
    title: "Local-first Notes App",
    description: "A lightning-fast, offline-capable Markdown editor with local syncing.",
    status: "Completed",
    category: "Productivity",
  },
  {
    id: "3",
    title: "API Gateway for LLMs",
    description: "Lightweight proxy with unified caching, rate limiting, and cost tracking.",
    status: "Under review",
    category: "Developer Tools",
  },
  {
    id: "4",
    title: "Micro-SaaS Analytics",
    description: "Privacy-focused analytics widget that installs in under 10 seconds.",
    status: "Building",
    category: "Analytics",
  },
  {
    id: "5",
    title: "Decentralized Auth",
    description: "Simple passwordless authentication using passkeys and local wallets.",
    status: "Under review",
    category: "Security",
  },
  {
    id: "6",
    title: "Automated Video Shorts",
    description: "Turn long-form blog posts into engaging short-form video scripts and slides.",
    status: "Completed",
    category: "Content Creation",
  },
];

export function IdeaList() {
  const [ideas] = useState<Idea[]>(INITIAL_IDEAS);
  const [activeStatus, setActiveStatus] = useState<Idea["status"] | "All">("All");

  const filteredIdeas = ideas.filter((idea) => {
    return activeStatus === "All" || idea.status === activeStatus;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {(["All", "Building", "Under review", "Completed"] as const).map((status) => (
          <Button
            key={status}
            onClick={() => setActiveStatus(status)}
            variant={activeStatus === status ? "default" : "outline"}
            size="sm"
            className="rounded-xl border-zinc-800 text-xs px-3"
          >
            {status}
          </Button>
        ))}
      </div>

      {filteredIdeas.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredIdeas.map((idea) => (
            <IdeaCard key={idea.id} {...idea} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-sm text-zinc-500">No ideas found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
