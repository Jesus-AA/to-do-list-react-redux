import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RegisterComponent = lazy(
  () => import('../components/user-register/user-register')
);
const LoginComponent = lazy(
  () => import('../components/user-login/user-login')
);

export const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          path="/register"
          element={<RegisterComponent></RegisterComponent>}
        ></Route>
        <Route
          path="/login"
          element={<LoginComponent></LoginComponent>}
        ></Route>
      </Routes>
    </Suspense>
  );
};
