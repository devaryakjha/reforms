import Button from "@/ui/Button";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Reforms: Elevate Your Data Collection with Elegance and Efficiency
        </h1>
        <p className={styles.description}>
          Reforms is a simple, elegant, and efficient form builder that allows
          you to collect data with ease. It is designed to help you create
          forms, surveys, and quizzes that are easy to use and look great on any
          device.
        </p>
        <Link href="/api/auth/login?returnTo=/home">
          <Button variant="secondary" size="xl" className={styles.cta}>
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
