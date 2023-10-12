import { SyntheticEvent, useState } from 'react';
import { useUsers } from '../../hooks/use-users';
import { UserNoId } from '../../model/user';
import styles from './user-register.module.scss';

export function Register() {
  const { userRegister } = useUsers();

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
    if (newUser.firstName.length < 2) return;
    if (newUser.lastName.length < 2) return;
    if (newUser.email.length < 10) return;
    if (newUser.password.length < 8) return;

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
        </div>
        <div className={styles['section']}>
          <div className={styles['message-div']}>
            <label className={styles['form-label']} htmlFor="email">
              Email
            </label>{' '}
            {email.length < 10 ? (
              <span>Your email should have at least 10 characters</span>
            ) : null}
          </div>
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
