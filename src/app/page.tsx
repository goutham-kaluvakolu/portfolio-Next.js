import { USER_NAME } from "@/config";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Me from "@/components/Me";
import Edu from "@/components/Edu";
import Exp from "@/components/Exp";
import Skills from "@/components/Skills";

export default async function Home() {
  async function getItem() {
    const res = await fetch(`https://api.github.com/users/${USER_NAME}/repos?sort=updated&direction=desc`, { cache: 'no-store' })
    return res.json()
  }
  const item = await getItem()
  const image = item[0].owner.avatar_url
  const name = item[0].owner.login

  const mod_items = item.map((item: { name: string, description: string, html_url: string, topics: string, created_at: string, homepage: string }) => {
    return { name: item.name, description: item.description, html_url: item.html_url, topics: item.topics, created_at: item.created_at, homepage: item.homepage }
  })

  let mod_array: { [key: string]: Array<any> } = { "Web Development": [], "AI": [], "Software Engineering": [], "Misc": [] };
  mod_items.forEach((element: { name: string, description: string, html_url: string, topics: string, created_at: string, homepage: string }) => {
    if (element.topics.includes("webdev")) {
      mod_array["Web Development"].push(element);
    }
    if (element.topics.includes("ai")) {
      mod_array["AI"].push(element);
    }
    if (element.topics.includes("software")) {
      mod_array["Software Engineering"].push(element);
    }
    if (!element.topics.includes("webdev") && !element.topics.includes("ai") && !element.topics.includes("software")) {
      mod_array["Misc"].push(element);
    }
  });


  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <main className="flex-1 md:ml-64 bg-gray-100">
        <section id="contact" className="scroll-mt-16 pt-16 md:pt-0">
          <Me image={image} name={name} />
        </section>
        <section id="education" className="scroll-mt-16">
          <Edu />
        </section>
        <section id="experience" className="min-h-screen scroll-mt-16">
          <Exp />
        </section>
        <section id="projects" className="min-h-screen scroll-mt-16">
          <Projects projects={item} mod_array={mod_array} />
        </section>
        <section id="skills" className="min-h-screen scroll-mt-16">
          <Skills />
        </section>
      </main>
    </div>
  );
}