import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>DEVELOPER PROFILE</span>
          <h1>안녕하세요, 개발자입니다.</h1>
          <p>
            사용자의 문제를 세심하게 살피고, 아이디어를 직관적이고 안정적인 웹
            경험으로 구현합니다. 새로운 기술을 꾸준히 배우며 작은 디테일까지
            책임감 있게 완성하는 것을 중요하게 생각합니다.
          </p>
        </div>
      </main>
    </div>
  );
}
