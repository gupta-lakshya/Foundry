import { Idea } from "../types";
import { Badge } from "@/components/ui/badge";

export function IdeaCard({ title, description, status, category }: Idea) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950/20 p-5 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/10">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-semibold tracking-wider uppercase text-zinc-500">
            {category}
          </span>
          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>
        </div>
        <Badge variant="outline" className="rounded-full text-[10px] font-medium border-zinc-700 text-zinc-400">
          {status}
        </Badge>
      </div>
      <p className="text-xs text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
