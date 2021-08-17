import Head from 'next/head';
import Header from '@Header/Header';
import Timetable from '@Timeline/Timeline';
import RightPanel from '@RightProfilePanel/ProfilePanel';
import Notifications from '@Notifications/Notification';
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
      <Notifications />
    </>
  );
}
