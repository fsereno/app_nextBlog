import { useRef } from 'react';

import formClasses from "../../styles/form.module.css";

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    console.log(enteredOldPassword)
    console.log(enteredNewPassword)

  }

  return (
    <form className={formClasses.form} onSubmit={submitHandler}>
      <div className={formClasses.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordRef} />
      </div>
      <div className={formClasses.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input type='password' id='old-password' ref={oldPasswordRef} />
      </div>
      <div className={formClasses.actions}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
