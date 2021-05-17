import Head from 'next/head';
import { Timetable } from '@Main/lessons/Timetable';
import { Aside } from '@Aside/lessons/Aside';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Timetable />
      <Aside />
    </>
  );
}
