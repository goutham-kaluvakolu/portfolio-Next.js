import { USER_NAME } from "@/config";

export async function getGithubData() {
  try {
    const res = await fetch(`https://api.github.com/users/${USER_NAME}/repos?sort=updated&direction=desc&per_page=10`, {
      cache: 'force-cache',
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const data = await res.json();
    return {
      items: data,
      image: data[0]?.owner?.avatar_url || '',
      name: data[0]?.owner?.login || '',
      mod_array: processProjects(data)
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return {
      items: [],
      image: '',
      name: USER_NAME,
      mod_array: { "Web Development": [], "AI": [], "Software Engineering": [], "Misc": [] }
    };
  }
}

function processProjects(items: any[]) {
  const mod_array: { [key: string]: Array<any> } = {
    "Web Development": [],
    "AI": [],
    "Software Engineering": [],
    "Misc": []
  };

  items.forEach(item => {
    const topics = item.topics || [];
    if (topics.includes("webdev")) {
      mod_array["Web Development"].push(item);
    } else if (topics.includes("ai")) {
      mod_array["AI"].push(item);
    } else if (topics.includes("software")) {
      mod_array["Software Engineering"].push(item);
    } else {
      mod_array["Misc"].push(item);
    }
  });

  return mod_array;
} 