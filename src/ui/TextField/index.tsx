import styles from "./TextField.module.css";

interface TextFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

export default function TextField(props: TextFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={styles.filledinput}
        type="text"
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}
