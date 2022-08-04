import styles from './presentation.module.scss';

/* eslint-disable-next-line */
export interface PresentationProps {}

export function Presentation(props: PresentationProps) {

  return (
    <div className="flex align-items-center flex-column text-white ">
      <h1>Matthis PINON</h1>

    </div>
  );
}

export default Presentation;
