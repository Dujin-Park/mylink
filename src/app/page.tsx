import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>NEXT.JS + TYPESCRIPT</span>
          <h1>마이링크</h1>
          <p>프로젝트가 준비되었습니다. 이제 나만의 서비스를 만들어 보세요.</p>
        </div>
        <p className={styles.hint}>
          <code>src/app/page.tsx</code>에서 첫 페이지를 수정할 수 있습니다.
        </p>
      </main>
    </div>
  );
}
