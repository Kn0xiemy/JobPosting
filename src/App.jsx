import React from "react";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import Error404 from "./pages/Error404";
import JobDetails, {jobLoader} from "./pages/JobDetails";
import AddJobPage from "./pages/AddJobPage";
import 'react-toastify/dist/ReactToastify.css'
import EditJob from "./pages/EditJob";
import LoginPage from "./pages/LoginPage";
import { AuthContextProvider } from "./context/AuthContext";


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
  const deleteJob = async (id) => {
    {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
      })
      return;
    }
  }

  // Updating context job
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    })
    return;
  }

  const router = createBrowserRouter(
    
    createRoutesFromElements(
    <Route path="/" element={<MainLayout></MainLayout>}>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path='/jobs' element={ <JobsPage></JobsPage> }></Route>
      <Route path='/login' element={ <LoginPage></LoginPage> }></Route>
      <Route path='/add-job' element={ <AddJobPage  addJobSubmit={addJob}></AddJobPage> }></Route>
      <Route path='/edit-job/:id' element={ <EditJob updateJobSubmit={updateJob}></EditJob> } loader={jobLoader}></Route>
      <Route path='/jobs/:id' element={ <JobDetails deleteJob={deleteJob}></JobDetails> } loader={jobLoader}></Route>
      <Route path='*' element={ <Error404></Error404> }></Route>
  
    </Route>
    
  )
  );
  return <AuthContextProvider><RouterProvider router={router}></RouterProvider></AuthContextProvider>;
};

export default App;
