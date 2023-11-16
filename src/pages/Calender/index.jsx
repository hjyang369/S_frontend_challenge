import React, { useState } from "react";
import "./calender.css";

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [openMemo, setOpenMemo] = useState(false);

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(newDate);
  };

  const handleMemo = (id) => {
    setOpenMemo((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const blanks = Array(firstDayOfMonth).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

    return (
      <div className="calendar">
        <div className="header">
          <button onClick={prevMonth}>{"<"}</button>
          <h2>
            {currentDate.toLocaleString("default", { month: "long" })}{" "}
            {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth}>{">"}</button>
        </div>
        <div className="weekdays">
          {daysOfWeek.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div className="days">
          {blanks.map((_, index) => (
            <div key={`blank-${index}`} className="empty"></div>
          ))}
          {days.map((day) => (
            <div onClick={() => handleMemo(day)} key={day} className="day">
              {day}
              {openMemo[day] && (
                <div className="memoContainer">
                  <input type="text" placeholder="내용을 입력해주세요."></input>
                  <button>등록</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{renderCalendar()}</div>;
}
