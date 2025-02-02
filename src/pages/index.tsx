import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background gap-y-8">
        <h1 className="text-3xl font-bold text-primary">Hello World</h1>
      </main>
    </>
  );
}
