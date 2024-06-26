
import { USER_NAME } from "@/config";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Me from "@/components/Me";
import Edu from "@/components/Edu";
import Exp from "@/components/Exp";



export default async function Home() {
  async function getItem() {
    const res = await fetch(`https://api.github.com/users/${USER_NAME}/repos?sort=updated&direction=desc`, { cache: 'no-store' })
    return res.json()
  }
  const item = await getItem()
  const image = item[0].owner.avatar_url
  const name = item[0].owner.login

  //make an arrat of json objects ,each json object is a project and it has name,description,html_url,topics,created_at,homepage

  const mod_items = item.map((item: { name: string, description: string, html_url: string, topics: string, created_at: string, homepage: string }) => {
    return { name: item.name, description: item.description, html_url: item.html_url, topics: item.topics, created_at: item.created_at, homepage: item.homepage }
  })

  // console.log(mod_items)


  let mod_array: { [key: string]: Array<any> } = { "webdev": [], "ai": [], "software": [], "misc": [] };
  //loop though each item in mod_array and make 4 objects in an array. namely webdev ai software misc. if the mod_arry item has any of the keyword in it , put it in that object
  mod_items.forEach((element: { name: string, description: string, html_url: string, topics: string, created_at: string, homepage: string }) => {
    //if the element doesnot have any of the keyword in it , put it in misc

    if (element.topics.includes("webdev")) {
      mod_array["webdev"].push(element);
    }
    if (element.topics.includes("ai")) {
      mod_array["ai"].push(element);
    }
    if (element.topics.includes("software")) {
      mod_array["software"].push(element);
    }
    if (!element.topics.includes("webdev") && !element.topics.includes("ai") && !element.topics.includes("software")) {
      mod_array["misc"].push(element);
    }

  });


  return (
    <div className="transparent">
      <Navbar />

      <Me image={image} name={name} />
      <div className="pt-16"> {/* Add padding to prevent content from being hidden behind the navbar */}
        <section id="education" className="bg-gray-100 p-8  scroll-mt-16">
          <h1 className="text-3xl font-bold">Education</h1>
          {/* <Navbar/> */}
          <Edu />
        </section>

        <section id="experience" className="min-h-screen bg-gray-200 p-8  scroll-mt-16">
          <h1 className="text-3xl font-bold">Experience</h1>
          <Exp />
        </section>

        <section id="projects" className="min-h-screen bg-gray-300 p-8  scroll-mt-16">
          {/* {loading ? <div>Loading...</div> : <Projects projects={projects} />} */}
          <Projects projects={item} mod_array={mod_array} />
        </section>
      </div>
    </div>
  );


}