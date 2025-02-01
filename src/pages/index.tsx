import { Button } from "~/components/ui/button";
import { Moon} from "lucide-react"
import { api } from "~/utils/api";
import { useTheme } from "next-themes";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const {setTheme} = useTheme()
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-background gap-y-8">
        <h1 className="text-3xl font-bold text-primary">Hello World</h1>
        <Button>Button</Button>
        <Button size='icon' onClick={()=> setTheme("dark")} >
          <Moon/>
        </Button>
      </main>
    </>
  );
}
