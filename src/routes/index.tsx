import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXARA Chocolate — Scan. Play. Indulge." },
      {
        name: "description",
        content:
          "NEXARA Chocolate — Dubai's luxury chocolate where technology meets taste. Scan the QR. Play the game. Indulge the moment.",
      },
      { property: "og:title", content: "NEXARA Chocolate — Scan. Play. Indulge." },
      {
        property: "og:description",
        content: "Dubai's luxury chocolate where technology meets taste.",
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/nexara.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#060d1a", color: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "serif", letterSpacing: "0.4em" }}>
      NEXARA · LOADING
    </div>
  );
}
