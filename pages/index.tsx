import Head from 'next/head';
import Header from '@Header/Header';
import Preloader from '@Preloader';
import Timetable from '@Timeline/Timeline';
import RightPanel from '@RightProfilePanel/ProfilePanel';
import Notifications from '@Notifications/Notification';
import Steps from '@Modals/steps/CommonUsers';
// HOC
import Modal from '@Modals/Modal';
// Component
import { SwitchStep } from '@Modals/steps/SwitchStep';

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

      <Preloader />
      <Steps>
        <Modal>
          <SwitchStep />
        </Modal>
        <RightPanel />
      </Steps>
      <Header />
      <Timetable />
      <Notifications />
    </>
  );
}
