import styles from "./Features.module.css";
import SwatchIcon from "@heroicons/react/20/solid/SwatchIcon";
import LinkIcon from "@heroicons/react/20/solid/LinkIcon";
import ChartPieIcon from "@heroicons/react/20/solid/ChartPieIcon";

interface Feature {
  color?: string;
  icon: HeroIconComponent;
  title: string;
  description: string[];
}
const features: Feature[] = [
  {
    color: "#9cafb7",
    icon: SwatchIcon,
    title: "Intuitive Design",
    description: [
      "Craft visually appealing forms effortlessly.",
      "Ensure a seamless user experience.",
      "Customize forms to match your brand.",
    ],
  },
  {
    color: "#9cafb7",
    icon: LinkIcon,
    title: "Effortless Integration",
    description: [
      "Connect seamlessly with favorite tools.",
      "Streamline data management.",
      "Maximize efficiency with easy integrations.",
    ],
  },
  {
    color: "#9cafb7",
    icon: ChartPieIcon,
    title: "Insightful Analytics",
    description: [
      "Gain valuable insights beyond responses.",
      "Make informed decisions with deep analytics.",
      "Understand audience better with data.",
    ],
  },
];

export default function Features() {
  return (
    <div className={styles.features}>
      {features.map((feature) => (
        <div key={feature.title} className={styles.feature}>
          <feature.icon className={styles.icon} color={feature.color} />
          <h3 className={styles.heading}>{feature.title}</h3>
          <ul className={styles.list}>
            {feature.description.map((description, index) => (
              <li key={index} className={styles.item}>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}