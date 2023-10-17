import { SyntheticEvent, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { emailHandling } from '../../data-handling/email-handling';
import { useUsers } from '../../hooks/use-users';
import { UserNoId } from '../../model/user';
import styles from './user-register.module.scss';

function Register() {
  const { userRegister, errorSource } = useUsers();

  const [firstName, setFirstName] = useState('');
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const formElement = ev.currentTarget as HTMLFormElement;

    const newUser: UserNoId = {
      firstName: (
        formElement.elements.namedItem('firstName') as HTMLFormElement
      ).value,
      lastName: (formElement.elements.namedItem('lastName') as HTMLFormElement)
        .value,
      email: (formElement.elements.namedItem('email') as HTMLFormElement).value,
      password: (formElement.elements.namedItem('password') as HTMLFormElement)
        .value,
    };

    userRegister(newUser);
  };

  return (
    <div className={styles['main-div']}>
      <form className={styles['form']} onSubmit={handleSubmit} role="form">
        <h2 className={styles['register-title']}>Register</h2>

        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="firstName">
              First Name
            </label>{' '}
            {firstName.length < 2 ? (
              <span>Your first name should have at least 2 characters</span>
            ) : null}
          </div>
          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                type="text"
                name="firstName"
                id="firstName"
                required
                autoComplete="true"
                placeholder="First Name"
                onChange={handleFirstNameChange}
              />
            </div>
            <div className={styles['check-div']}>
              {firstName.length < 2 ? null : (
                <span className={styles['check']}>
                  <AiFillCheckCircle />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="lastName">
              Last Name
            </label>{' '}
            {lastName.length < 2 ? (
              <span>Your last name should have at least 2 characters</span>
            ) : null}
          </div>
          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="true"
                placeholder="Last Name"
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className={styles['check-div']}>
              {lastName.length < 2 ? null : (
                <span className={styles['check']}>
                  <AiFillCheckCircle />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="email">
              Email
            </label>
            {emailHandling(email, errorSource) ? null : (
              <span>Your email should contain a valid direction</span>
            )}
          </div>
          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                type="email"
                placeholder="example@email.com"
                name="email"
                id="email"
                autoComplete="true"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className={styles['check-div']}>
              {emailHandling(email, errorSource) ? (
                !errorSource ? (
                  <span className={styles['check']}>
                    <AiFillCheckCircle />
                  </span>
                ) : (
                  <span className={styles['cross']}>
                    <AiFillCloseCircle />
                  </span>
                )
              ) : errorSource ? (
                <span className={styles['cross']}>
                  <AiFillCloseCircle />
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="password">
              Password
            </label>{' '}
            {password.length < 8 ? (
              <span>Your password should have at least 8 characters</span>
            ) : null}
          </div>
          <div className={styles['input-div']}>
            <div>
              <input
                className={styles['input']}
                autoComplete="true"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className={styles['check-div']}>
              {password.length < 8 ? null : (
                <span className={styles['check']}>
                  <AiFillCheckCircle />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className={styles['button-div']}>
          {firstName.length >= 2 &&
            lastName.length >= 2 &&
            email.length >= 10 &&
            (email.includes('@gmail.com') ||
              email.includes('@hotmail.com') ||
              email.includes('@outlook.com')) &&
            password.length >= 8 && (
              <button className={styles['button']} type="submit">
                Submit
              </button>
            )}
        </div>
      </form>
    </div>
  );
}

export default Register;
