"use client";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4 bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl font-bold mb-4">This is the landing page</h1>

      <Button variant="primary" onClick={() => alert("Primary clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary" onClick={() => alert("Secondary clicked!")}>
        Secondary Button
      </Button>

      <Button variant="danger" disabled>
        Disabled Danger
      </Button>
    </div>
  );
}
