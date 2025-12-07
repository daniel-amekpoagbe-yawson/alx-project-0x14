import Button from "@/components/commons/Button";
import Card from "@/components/commons/Card";

export default function About() {
  return (
    <main className="bg-linear-to-br from-slate-800 to-slate-950 min-h-screen pt-25 px-4 text-gray-100">
      <div className="mx-auto flex flex-col max-w-6xl gap-4">
        About
        <Card
          title="A walkthrough the basic of Next JS pages router."
          content="The next js pages router..."
        />
        <Button size="small" shape="rounded-sm">
          Small size
        </Button>
        <Button size="meduim" variant="outline" shape="rounded-md">
          Meduim size
        </Button>
        <Button size="large" shape="rounded-full">
          Large size
        </Button>
      </div>
    </main>
  );
}

//// ["import Header from "@/components/layout/Header" ]
// <Header />
