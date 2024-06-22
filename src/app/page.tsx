import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home",
  description: "Application for study about NextJs",
  authors: [{ name: "Weartime", url: "http://localhost:3000" }],
  icons: {
    icon: "/images/anime-profile.jpg",
  },
  openGraph: {
    title: "Home - My Application",
  },
};
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
