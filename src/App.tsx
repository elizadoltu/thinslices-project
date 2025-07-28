import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';


const Login = lazy(() => import('./pages/auth/Login'));

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
            <ErrorBoundary fallback={<div>Something went wrong loading this page</div>}>
              <Suspense fallback={<div className="items-center content-center">Loading...</div>}>
                <Login />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Routes>
    </Router>
    </MantineProvider>
  );
};

export default App;