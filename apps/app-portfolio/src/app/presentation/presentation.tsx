import styles from './presentation.module.scss';

/* eslint-disable-next-line */
export interface PresentationProps {}

export function Presentation(props: PresentationProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Presentation!</h1>
    </div>
  );
}

export default Presentation;
