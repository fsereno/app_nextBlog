import formClasses from "../../styles/form.module.css";

export default function SuccessMessage({ show, children }) {
  return (
    <>
      {show && (
        <div className={`${formClasses.message} ${formClasses.success}`}>
          {children}
        </div>
      )}
    </>
  );
}
