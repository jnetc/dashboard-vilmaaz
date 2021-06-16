import Head from 'next/head';
import { Timetable } from '@Timeline/Timetable';
// import { RightSidePanel } from '@Main/lessons/right-side-panel';
import { UpdateTimetable } from '@Timeline/UpdateTimetable';
import Aside from '@Aside/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Timetable />
      {/* <RightSidePanel /> */}
      <Aside />
      <UpdateTimetable />
    </>
  );
}
