import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="font-inter flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-10">
        <NavBar></NavBar>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6 mt-7 mb-7 sm:mt-[64px] sm:mb-[64px] overflow-auto">
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 p-4 w-full mt-auto">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
