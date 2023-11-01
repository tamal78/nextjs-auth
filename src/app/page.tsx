import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';
import SignoutButton from '@/components/signoutButton';
import HomeHere from '@/components/homeHere';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className='h-full'>
      <HomeHere />
      <div className='container'>
        <div className='px-10 lg:px-80'>
          <h1 className='text-4xl'>User Details</h1>
          {JSON.stringify(session)}
        </div>
      </div>
      <div className='flex mt-10 justify-center'>
        <SignoutButton />
      </div>
    </main>
  );
}
