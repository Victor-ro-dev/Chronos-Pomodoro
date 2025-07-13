import styles from '../styles/heading/Heading.module.css'

type HeadingProps = {
  children?: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  return (
    <h1 className={styles.heading}>
      {props.children || 'Chronos Pomodoro'}
    </h1>
  );
}