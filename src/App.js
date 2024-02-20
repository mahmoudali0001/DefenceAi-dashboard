import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./Containers/HomePage/HomePage";
import AuthenticationInputs from "./Compononts/Authentication/AuthenticationInputs";
import BackgroundStyle from "./Compononts/UI/BackgroundStyle/BackgroundStyle";

const App = (props) => {
  const [theme, setTheme] = useState("dark");
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleAuthentication = () => {
    setAuthentication(authentication ? false : true);
    console.log("work");
  };

  const HomePageWrapper = (props) => {
    const { theme } = props;
    return <HomePage {...props} theme={theme} />;
  };

  return (
    <div className={` bg-transparent ${theme}`}>
      {authentication ? (
        <Layout theme={theme} clicked={handleThemeSwitch}>
          <BackgroundStyle theme={theme} />
          <Routes>
            <Route
              path="/"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Overview</p>
              }
            />
            <Route
              path="/Respositories"
              element={
                <p className="bg-[#0d1117] h-screen text-white">
                  Respositories
                </p>
              }
            />
            <Route
              path="/discussions"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Discussions</p>
              }
            />
            <Route
              path="/Projects"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Projects</p>
              }
            />

            <Route
              path="/packages"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Packages</p>
              }
            />

            <Route
              path="/teams"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Teams</p>
              }
            />

            <Route
              path="/security"
              exact
              Component={(routeProps) => (
                <HomePageWrapper {...routeProps} theme={theme} />
              )}
            />

            <Route
              path="/insights"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Insights</p>
              }
            />

            <Route
              path="/settings"
              element={
                <p className="bg-[#0d1117] h-screen text-white">Settings</p>
              }
            />
          </Routes>
        </Layout>
      ) : (
        <AuthenticationInputs Auth={handleAuthentication} />
      )}
    </div>
  );
};

export default App;
