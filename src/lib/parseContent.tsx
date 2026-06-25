import React from "react";
import { Player } from "@/components/Player";

const PLAYER_TOKEN = /\{player:([\w-]+)\}/g;

export function parseContent(content: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = PLAYER_TOKEN.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push(<Player key={`${match[1]}-${match.index}`} slug={match[1]} />);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts;
}
