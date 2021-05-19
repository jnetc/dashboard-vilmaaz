import Head from 'next/head';
import { Timetable } from '@Main/lessons/Timetable';
import { RightSidePanel } from '@Main/lessons/right-side-panel';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Timetable />
      <RightSidePanel />
    </>
  );
}
