import styles from './App.module.scss';
import { Register } from './components/user-register/user-register';

function App() {
  return (
    <>
      <div className={styles['main-app-div']}>
        <Register></Register>
      </div>
    </>
  );
}

export default App;
