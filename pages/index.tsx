import Head from 'next/head';
// Global Context
import { useStore } from '@Store';
// Components
import { SidePanel } from '@SidePanel/SidePanel';
import { IndexSideContent } from '@SidePanel/IndexSideContent';
import { IndexMainContent } from '@Main/IndexMainContent';

export default function Home() {
  const data = useStore();
  console.log(data);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexMainContent />
      <SidePanel>
        <IndexSideContent />
      </SidePanel>
    </>
  );
}
