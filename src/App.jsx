import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewJobs from "./components/ViewJobs";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero title="Become a React Dev" subtitle="Find the React job that is right for you!"></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewJobs></ViewJobs>

    </>
  );
};

export default App;
