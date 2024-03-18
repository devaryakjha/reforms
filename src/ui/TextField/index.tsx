import styles from "./TextField.module.css";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  name: string;
}

export default function TextField({ name, label, ...props }: TextFieldProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.filledinput}
        type="text"
        id={name}
        name={name}
        {...props}
      />
    </div>
  );
}
