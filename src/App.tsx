import styles from './App.module.scss';
import { AppRouter } from './routes/app-routes';

function App() {
  return (
    <>
      <div className={styles['main-app-div']}>
        <AppRouter></AppRouter>
      </div>
    </>
  );
}

export default App;
