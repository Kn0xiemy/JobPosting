import React from "react";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import Error404 from "./pages/Error404";
import JobDetails, {jobLoader} from "./pages/JobDetails";
import AddJobPage from "./pages/AddJobPage";
import addJobSubmit from "../src/pages/AddJobPage";



const App = () => {
  // adding new job to the server
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })
    return;
  }
  // Removing context job from server
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path='/jobs' element={ <JobsPage></JobsPage> }></Route>
      <Route path='/add-job' element={ <AddJobPage  addJobSubmit={addJob}></AddJobPage> }></Route>
      <Route path='/jobs/:id' element={ <JobDetails></JobDetails> } loader={jobLoader}></Route>
      <Route path='*' element={ <Error404></Error404> }></Route>
  
    </Route>
    
  )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
