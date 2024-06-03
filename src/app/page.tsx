import { USER_NAME } from "@/config";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Me from "@/components/Me";



export default async function Home() {
  async function getItem() {
    // The `fetch` function is automatically memoized and the result
    // is cached
    const res = await fetch(`https://api.github.com/users/${USER_NAME}/repos`)
    return res.json()
  }
  const item = await getItem()
  const image = item[0].owner.avatar_url
  const name = item[0].owner.login
  const description = item[0].description
  const socials = item[0].html_url

  console.log(item.length)
  return (
    <div>
      <Navbar />
      <Me image={image} name={name}/>
      <div className="pt-16"> {/* Add padding to prevent content from being hidden behind the navbar */}
        <section id="experience" className="min-h-screen bg-gray-100 p-8">
          <h1 className="text-3xl font-bold">Experience</h1>
          <p>Details about experience...</p>
        </section>

        <section id="education" className="min-h-screen bg-gray-200 p-8">
          <h1 className="text-3xl font-bold">Education</h1>
          <p>Details about education...</p>
        </section>

        <section id="projects" className="min-h-screen bg-gray-300 p-8">
         {/* {loading ? <div>Loading...</div> : <Projects projects={projects} />} */}
          <Projects projects={item} />
        </section>

        <section id="contact" className="min-h-screen bg-gray-400 p-8">
          <h1 className="text-3xl font-bold">Contact</h1>
          <p>Details about how to contact...</p>
        </section>
      </div>
    </div>
  );


}
