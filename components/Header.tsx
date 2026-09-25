export default function Header() {
  return (
    <header className="header">
      <a className="wordmark" href="#" aria-label="Haroon home">
        haroon<span>®</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">
          Work <span>03</span>
        </a>
        <a href="#about">About</a>
        <a href="#publication">Publication</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="resume" href="/Mohammad-Haroon-Resume.pdf" download>
        Resume <span>↓</span>
      </a>
    </header>
  );
}
