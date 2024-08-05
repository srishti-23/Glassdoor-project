// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Community from "./pages/Community";
import Salary from "./pages/Salary";
import Companies from "./pages/Companies";
import Password from "./components/Password";
import Signup from "./components/Signup";
import BookmarkedJobs from "./components/BookmarkedJobs";
import { Provider } from 'react-redux';
import store from './store'; 
import { AuthProvider, useAuth } from "./contexts/authContext/Index";

function App() {
  //Routing all components here and done authentication

  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/community" element={<Community />} />
            <Route path="/password" element={<Password />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bookmarkedjobs" element={<BookmarkedJobs />} />
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
