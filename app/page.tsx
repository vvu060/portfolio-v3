import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaHome } from 'react-icons/fa';

export default function Home() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <FaHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
    },
  ];

  return (
    <main className='relative bg-black-100 flex flex-col justify-center items-center mx-auto overflow-hidden sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
