import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonal from "./components/Testimonial";

export default function SignedOut() {
  return (
    <main className="typography-base">
      <Hero />
      <Features />
      <Testimonal />
    </main>
  );
}
