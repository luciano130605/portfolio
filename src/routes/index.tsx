import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/site/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Portfolio />;
}
