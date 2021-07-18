import Head from 'next/head';
import Header from '@Header/Header';
import Timetable from 'components/timeline/Timeline';
import RightPanel from 'components/right-profile-panel/ProfilePanel';
import { Steps } from '@Modals/steps/Steps';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tervetuloa Wilmaaz lukujärjestyksen</title>
        <meta
          name="description"
          content="Tämä on aikataulu oppitunteja koko viikon ajan reaaliajassa."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Steps />
      <Header />
      <Timetable />
      <RightPanel />
    </>
  );
}
