import { Button } from "./ui/button";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

export default function LoginOptions() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {/* A login option with the Github & Google provider, I will use Auth.js (https://authjs.dev/getting-started/installation?framework=Next.js) */}
      <Button
        variant="outline"
        size="lg"
        className="w-full duration-500 animate-in fade-in-5 slide-in-from-bottom-2"
      >
        <SiGithub size={24} />
        Login with GitHub
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-full duration-500 animate-in fade-in-5 slide-in-from-top-2"
      >
        <SiGoogle size={24} />
        Login with Google
      </Button>
    </div>
  );
}
