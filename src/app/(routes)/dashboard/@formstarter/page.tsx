import formTemplates, { FormTemplate } from "@/constants/form_templates";
import styles from "./FormStarter.module.css";

export default function FormStarter() {
  return (
    <section className={styles.starter}>
      <ul>
        {formTemplates.map((template) => (
          <TemplatePreview key={template.id} {...template} />
        ))}
      </ul>
    </section>
  );
}

const TemplatePreview = (template: FormTemplate) => {
  return <li></li>;
};
