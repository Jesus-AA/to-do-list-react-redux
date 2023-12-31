import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../components/home-page/home-page';
import { Tasks } from '../components/tasks-list/tasks';

const RegisterComponent = lazy(
  () => import('../components/user-register/user-register')
);

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/register"
          element={<RegisterComponent></RegisterComponent>}
        ></Route>
        <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      </Routes>
    </Suspense>
  );
};
