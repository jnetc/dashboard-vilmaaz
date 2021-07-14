import { FC } from 'react';
import { ModalStyle } from './Modal.style';
// Hook
import { useGlobalStore } from '@Hooks/useStores';
import { useStepsStore } from '@Hooks/useStores';

const Modal: FC = ({ children }) => {
  const { openModal, setOpenModal } = useGlobalStore();
  // let { step, setStep } = useStepsStore();
  // let [step, setStep] = useState(1);
  // const cancel = () => setOpenModal(false);

  if (!openModal) null;

  // const next = () => {
  //   if (step >= 3) return;
  //   ++step;
  //   setStep(step);
  // };
  // const prev = () => {
  //   if (step <= 1) return;
  //   --step;
  //   setStep(step);
  // };

  return (
    <ModalStyle open={openModal} id="modal">
      <button
        id="close-modal"
        aria-label="close modal"
        onClick={() => setOpenModal(false)}
      />
      <div className="wrapper">{children}</div>
      {/* <div className="btns">
        <button className="controls" onClick={prev}>
          Prev
        </button>
        <button className="controls" onClick={next}>
          Next
        </button>
      </div> */}
    </ModalStyle>
  );
};

export default Modal;
