import { lazy, Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ProtectedRoutes from "./ProtectedRoutes";

const NotFound = lazy(() => import("../components/404/NotFound"));
const Login = lazy(() => import("../components/Login/Login"));
const Register = lazy(() => import("../components/Register/Register"));
const Tasks = lazy(() => import("../components/Tasks/Tasks"));

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const MainRoutes = () => {
  return (
    <>
      <AnimatePresence>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route
              path="/login"
              element={
                <ProtectedRoutes>
                  <motion.div
                    className="page"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                  >
                    <Login />
                  </motion.div>
                </ProtectedRoutes>
              }
            />
            <Route
              path="/register"
              element={
                <motion.div
                  className="page"
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}
                >
                  <Register />
                </motion.div>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <motion.div
                    className="page"
                    initial="out"
                    animate="in"
                    exit="out"
                    variants={pageTransition}
                  >
                    <Tasks />
                  </motion.div>
                </ProtectedRoutes>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  className="page"
                  initial="out"
                  animate="in"
                  exit="out"
                  variants={pageTransition}
                >
                  <NotFound />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

export default MainRoutes;
