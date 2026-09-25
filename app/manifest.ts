import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lucky Tours — Sayohatlar yangi bosqichda",
    short_name: "Lucky Tours",
    description:
      "O'zbekistondan dunyoga premium turlar: Turkiya, BAA, Gruziya, Tailand, Xitoy, Malayziya, Vetnam, Ozarbayjon. Eng yaxshi narxlar va sifatli xizmat.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a1a",
    theme_color: "#6c5ce7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
