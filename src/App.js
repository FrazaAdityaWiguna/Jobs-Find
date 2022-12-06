import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import HelloWorld from "./pages/helloWorld";
import Job from "./pages/job";
import JobsFind from "./pages/jobsFind";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Login />} />
              <Route path="/hello" element={<HelloWorld />} />
              <Route
                path="/jobs-find"
                element={
                  <PrivateRoute>
                    <JobsFind />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/job/:project_id"
                element={
                  <PrivateRoute>
                    <Job />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </>
  );
}

export default App;
