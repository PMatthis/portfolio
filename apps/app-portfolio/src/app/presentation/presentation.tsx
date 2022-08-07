import styles from './presentation.module.scss';

/* eslint-disable-next-line */
export interface PresentationProps {
  summary: string,

}

export function Presentation(props: PresentationProps) {

  return (
    <div className="flex align-items-center flex-row justify-content-center">
      <div className='flex flex-column align-items-end'>
        <h2 className='w-full mb-0 text-center'>Bonjour, je m'appel</h2>
        <h1 className='w-full text-right'>Matthis PINON</h1>
        <img src='..\..\assets\pictures\gettyimages-vert-appaisement.jpg' alt='portrait de Matthis PINON'
          className='border-round-3xl w-9'
        />
      </div>
      <p className='text-center w-4'>{props.summary}</p>
    </div>
  );
}

export default Presentation;
