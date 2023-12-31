import Login from '../user-login/user-login';
import styles from './home-page.module.scss';

export function HomePage() {
  return (
    <div className={styles['main-div']}>
      <div className={styles['sub-div']}>
        <div className={styles['titles']}>
          <h1 className={styles['title-text']}>Welcome to</h1>
          <h1 className={styles['title-text']}>Kubo Notes</h1>
        </div>
      </div>

      <Login></Login>
    </div>
  );
}
