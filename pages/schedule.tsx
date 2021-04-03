import Head from 'next/head';
import Link from 'next/link';

export default function Schedule() {
  return (
    <>
      <Head>
        <title>Help</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Schedule</h1>
      <Link href="/schedule/:user" as="/schedule/jouni">
        <a>Jouni</a>
      </Link>
      <Link href="/schedule/:user" as="/schedule/suvi">
        <a>Suvi</a>
      </Link>
      <Link href="/schedule/:user" as="/schedule/hanna-maria">
        <a>Hanna-Maria</a>
      </Link>
      <Link href="/schedule/:user" as="/schedule/maju-marja">
        <a>Maju-Marja</a>
      </Link>
      <Link href="/schedule/:user" as="/schedule/pekka-ero">
        <a>Pekka-Ero</a>
      </Link>
    </>
  );
}
