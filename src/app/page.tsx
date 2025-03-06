import { Suspense } from 'react';
import Loading from './loading';
import ClientHome from './ClientHome';
import { getGithubData } from '@/lib/github';

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <AsyncContent />
    </Suspense>
  );
}

async function AsyncContent() {
  const { items, image, name, mod_array } = await getGithubData();
  
  return (
    <ClientHome 
      image={image} 
      name={name} 
      projects={items} 
      mod_array={mod_array} 
    />
  );
}