import Head from 'next/head';
import { useRouter } from 'next/router';

export default function UserSchedule() {
  const username = useRouter();

  return (
    <>
      <Head>
        <title>UserSchedule</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>UserSchedule: {username.query.user}</div>
    </>
  );
}
