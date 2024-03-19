export interface FormTemplate {
  title: string;
  id: string;
}

const formTemplates: FormTemplate[] = [
  {
    title: "Blank Form",
    id: "blank_form",
  },
  {
    title: "Feedback Form",
    id: "feedback_form",
  },
];

export default formTemplates;
