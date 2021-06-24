import Head from 'next/head';
import { Timetable } from '@Timeline/Timetable';
import { UpdateTimetable } from '@Timeline/UpdateTimetable';
import RightPanel from '@RightPanel/RightPanel';

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
      <Timetable />
      <RightPanel />
      <UpdateTimetable />
    </>
  );
}
