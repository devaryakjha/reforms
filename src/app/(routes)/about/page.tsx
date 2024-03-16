import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonal from "./components/Testimonial";
import styles from "./About.module.css";

export default function SignedOut() {
  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Testimonal />
    </main>
  );
}
