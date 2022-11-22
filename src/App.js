import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import Job from "./pages/job";
import JobsFind from "./pages/jobsFind";
import Login from "./pages/login";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Login />} />
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
    </>
  );
}

export default App;
