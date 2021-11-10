import main from "../../styles/main.module.css";
import layout from "../../styles/layout.module.css";
import footer from "../../styles/footer.module.css";

export default function Layout({ children }) {
  return (
    <>
      <main className={layout.main}>{children}</main>
      <footer className={footer.footer}>
        <a
          className={main.link}
          href="https://fsereno.github.io/portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
           By&nbsp;
          <strong className={layout.logo}>
            Fabio Sereno
          </strong>
        </a>
      </footer>
    </>
  );
}
