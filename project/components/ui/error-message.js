import formClasses from "../../styles/form.module.css";

export default function ErrorMessage({ show, children }) {
  return <>{show && <div className={formClasses.error}>{children}</div>}</>;
}
