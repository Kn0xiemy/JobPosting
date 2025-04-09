import React from "react";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import Error404 from "./pages/Error404";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout></MainLayout>}>
    <Route index element={<HomePage></HomePage>}></Route>
    <Route path='/jobs' element={ <JobsPage></JobsPage> }></Route>
    <Route path='*' element={ <Error404></Error404> }></Route>

  </Route>
  
)
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
