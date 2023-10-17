import { SyntheticEvent } from 'react';
import { useUsers } from '../../hooks/use-users';
import { UserLoginData } from '../../model/user';
import styles from './user-login.module.scss';

export function Login() {
  const { userLogin } = useUsers();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();

    const formElement = ev.currentTarget as HTMLFormElement;

    const user: UserLoginData = {
      email: (formElement.elements.namedItem('email') as HTMLFormElement).value,
      password: (formElement.elements.namedItem('password') as HTMLFormElement)
        .value,
    };
    userLogin(user);
  };

  return (
    <div className={styles['main-div']}>
      <h2 className={styles['title']}>Welcome Back</h2>
      <form className={styles['form']} role="form" onSubmit={handleSubmit}>
        <div className={styles['email-container']}>
          <label className={styles['label']} htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            autoComplete="true"
            required
          />
        </div>

        <div className={styles['password-container']}>
          <label className={styles['label']} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="true"
            id="password"
            placeholder="password"
            required
          />
        </div>

        <div className={styles['button-div']}>
          <button className={styles['button']} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
