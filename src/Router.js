import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/index";
import Timer from "./pages/Timer/index";
import TodoList from "./pages/TodoList";
import Calender from "./pages/Calender";
import Clone from "./pages/MiniIntern/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/clone" element={<Clone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
