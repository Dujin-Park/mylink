import styles from "./page.module.css";

const skills = ["Next.js", "TypeScript", "React", "웹 접근성"];

const profileLinks = [
  {
    label: "개발자 프로필",
    title: "GitHub 프로필",
    description: "개발 기록과 다양한 작업을 모아두고 있어요.",
    url: "https://github.com/Dujin-Park",
  },
  {
    label: "대표 프로젝트",
    title: "마이링크 저장소",
    description: "이 프로필 페이지의 코드와 업데이트를 확인할 수 있어요.",
    url: "https://github.com/Dujin-Park/mylink",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#home" aria-label="마이링크 홈">
          MY<span>/</span>LINK
        </a>
        <nav className={styles.nav} aria-label="페이지 메뉴">
          <a href="#about">소개</a>
          <a href="#stack">기술</a>
          <a href="#links">링크</a>
          <a href="#project">프로젝트</a>
        </nav>
        <a
          className={styles.headerLink}
          href="https://github.com/Dujin-Park/mylink"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>
              <span className={styles.statusDot} />
              프론트엔드 개발자
            </span>
            <h1 id="hero-title">
              좋은 아이디어를
              <br />
              <span>좋은 경험</span>으로 만들어요.
            </h1>
            <p className={styles.heroDescription}>
              안녕하세요, 개발자예요. 사용자의 문제를 세심하게 살피고 직관적이고
              안정적인 웹 경험으로 만들어요. 새로운 기술을 꾸준히 익히고, 작은
              디테일까지 책임감 있게 완성해요.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#about">
                소개 보기 <span aria-hidden="true">↓</span>
              </a>
              <a className={styles.textLink} href="#project">
                프로젝트 둘러보기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.avatar} aria-hidden="true">
              <span>DEV</span>
            </div>
            <div className={styles.visualCaption}>
              <strong>사용자를 먼저 생각해요</strong>
              <span>세심한 고민을 편리한 화면으로 만들어요.</span>
            </div>
          </div>
        </section>

        <section className={styles.contentSection} id="about">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>ABOUT</span>
            <h2>
              좋은 코드는
              <br />
              <span>좋은 질문</span>에서 시작해요
            </h2>
          </div>
          <div className={styles.aboutCard}>
            <span className={styles.cardTag}>일하는 방식</span>
            <p>
              무엇을 만들지보다 누구를 위해 만드는지 먼저 생각해요. 복잡한 문제는
              작게 나누고, 읽기 쉬운 코드와 세심한 인터랙션으로 누구나 편하게 쓸
              수 있는 제품을 만들어요.
            </p>
            <div className={styles.values}>
              <span>사용자 중심</span>
              <span>명확한 코드</span>
              <span>꾸준한 개선</span>
            </div>
          </div>
        </section>

        <section className={styles.contentSection} id="stack">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>SKILLS</span>
            <h2>
              익숙한 기술로
              <br />
              <span>더 나은 경험을</span> 만들어요
            </h2>
          </div>
          <div className={styles.toolkitCard}>
            <p>아이디어를 빠르고 안정적인 제품으로 만들어요.</p>
            <ul className={styles.skillList}>
              {skills.map((skill, index) => (
                <li key={skill}>
                  <span className={styles.skillIndex}>
                    0{index + 1}
                  </span>
                  <span>{skill}</span>
                  <span className={styles.skillArrow} aria-hidden="true">
                    ↗
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.linksSection} id="links">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>LINKS</span>
            <h2>
              더 많은 이야기를
              <br />
              <span>만나보세요</span>
            </h2>
          </div>
          <div className={styles.profileLinks}>
            {profileLinks.map((link, index) => (
              <article className={styles.profileLinkCard} key={link.url}>
                <div className={styles.linkCardHeading}>
                  <span className={styles.cardTag}>{link.label}</span>
                  <span className={styles.linkCardIndex}>0{index + 1}</span>
                </div>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
                <a
                  className={styles.profileUrl}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${link.title} URL: ${link.url}`}
                >
                  {link.url}
                </a>
                <a
                  className={styles.profileLinkButton}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  링크 열기 <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.projectSection} id="project">
          <div className={styles.projectCopy}>
            <span className={styles.sectionNumber}>PROJECT</span>
            <h2>
              지금 만들고 있는
              <br />
              <span>작은 프로젝트</span>
            </h2>
            <p>
              마이링크는 저를 소개하는 프로필 페이지예요. 읽기 쉬운 소개와 편리한
              링크를 한곳에서 만나볼 수 있도록 만들고 있어요.
            </p>
            <a
              className={styles.primaryButton}
              href="https://github.com/Dujin-Park/mylink"
              target="_blank"
              rel="noreferrer"
            >
              저장소 둘러보기 <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.projectArt} aria-label="마이링크 프로젝트 카드">
            <div className={styles.artTopline}>
              <span>마이링크</span>
              <span>프로필</span>
            </div>
            <div className={styles.artTitle}>
              my
              <br />
              link<span>.</span>
            </div>
            <div className={styles.artBottom}>
              <span>              나를 소개하는 공간</span>
              <span aria-hidden="true">✳</span>
            </div>
            <span className={styles.artOrbit} aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a className={styles.wordmark} href="#home" aria-label="페이지 맨 위로">
          MY<span>/</span>LINK
        </a>
        <p>작은 디테일까지 세심하게 만들어요.</p>
        <a
          className={styles.footerLink}
          href="https://github.com/Dujin-Park/mylink"
          target="_blank"
          rel="noreferrer"
        >
          GitHub에서 만나요 <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </div>
  );
}
