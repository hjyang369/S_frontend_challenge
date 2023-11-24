import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/index";
import Timer from "./pages/Timer/index";
import TodoList from "./pages/TodoList";
import Calender from "./pages/Calender";
import Clone from "./pages/MiniIntern/index";
import Slide from "./pages/Slide";
import Nav from "./pages/Nav";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/clone" element={<Clone />} />
        <Route path="/slide" element={<Slide />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
