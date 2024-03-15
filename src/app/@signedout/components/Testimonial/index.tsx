import styles from "./Testimonal.module.css";

export default function Testimonal() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.content}>
        <svg
          width="62"
          height="46"
          viewBox="0 0 62 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 30.2414C0 38.5663 6.11624 45.532 13.2519 45.532C20.2176 45.532 25.4844 40.2653 25.4844 33.4694C25.4844 26.1639 19.0283 21.237 10.5335 20.7273C12.7422 15.2906 16.4799 9.51416 23.7854 2.20864L21.5768 0C7.47541 7.9851 0 20.0477 0 30.2414ZM36.3577 30.2414C36.3577 38.5663 42.4739 45.532 49.6095 45.532C56.5753 45.532 61.842 40.2653 61.842 33.4694C61.842 26.1639 55.386 21.237 46.8912 20.7273C49.0999 15.2906 52.8376 9.51416 60.1431 2.20864L57.9344 0C43.8331 7.9851 36.3577 20.0477 36.3577 30.2414Z"
            fill="#2B2B2B"
          />
        </svg>
        <span className={styles.testimonial}>
          {
            '"I\'ve never been a fan of dealing with forms – they always seemed like a necessary evil. But Reforms changed my perspective entirely! Their intuitive design made creating forms a breeze, and the customization options let me tailor them to match my brand perfectly. Now, collecting data feels less like a chore and more like a creative endeavor. Thanks, Reforms!"'
          }
        </span>
        <span className={styles.author}>Sarah D., Small Business Owner</span>
      </div>
    </div>
  );
}
