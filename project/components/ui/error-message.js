import formClasses from "../../styles/form.module.css";

export default function ErrorMessage({ show, children }) {
  return (
    <>
      {show && (
        <div className={`${formClasses.message} ${formClasses.error}`}>
          {children}
        </div>
      )}
    </>
  );
}
