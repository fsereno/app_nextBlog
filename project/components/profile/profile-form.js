import { useRef, useState } from "react";
import formClasses from "../../styles/form.module.css";
import classes from "../../styles/auth-form.module.css";
import ErrorMessage from "../ui/error-message";
import SuccessMessage from "../ui/success-message";

function ProfileForm() {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    const isValid = event.nativeEvent.target.checkValidity();
    if (isValid) {
      const enteredOldPassword = oldPasswordRef.current.value;
      const enteredNewPassword = newPasswordRef.current.value;
      const response = await fetch("/api/profile/change-password", {
        method: "PATCH",
        body: JSON.stringify({
          oldPassword: enteredOldPassword,
          newPassword: enteredNewPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (result.error) {
        setShowError(true);
        setShowSuccess(false);
      } else {
        setShowError(false);
        setShowSuccess(true);
      }
    }
  }

  return (
    <form className={formClasses.form} onSubmit={submitHandler}>
      <div className={formClasses.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          required
          type="password"
          id="new-password"
          ref={newPasswordRef}
        />
      </div>
      <div className={formClasses.control}>
        <label htmlFor="old-password">Old Password</label>
        <input
          required
          type="password"
          id="old-password"
          ref={oldPasswordRef}
        />
      </div>
      <ErrorMessage show={showError}>
        There was an error, please check your credentials.
      </ErrorMessage>
      <SuccessMessage show={showSuccess}>
        Your password was updated successfully.
      </SuccessMessage>
      <div className={classes.actions}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
