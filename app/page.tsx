import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomLink from "@/components/CustomLink";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center tracking-widest">
      <h1 className="animate-pulse text-3xl font-bold">Let's build. 🚀</h1>
      <CustomLink
        href="https://github.com/terrytjw/t2-template"
        className="flex gap-4 p-8"
      >
        <FaGithub />
        Github repo
      </CustomLink>

      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>
    </main>
  );
}
