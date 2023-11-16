import React, { useState } from "react";
import "./calender.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [memoText, setMemoText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [memos, setMemos] = useState([]);

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

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
    setMemoText("");
  };

  const addMemo = () => {
    if (memoText.trim() !== "") {
      const dateKey = currentDate.toISOString().split("T")[0]; // 현재 날짜를 'YYYY-MM-DD' 형식으로 가져옴

      // memos 배열에서 해당 날짜에 대한 메모 목록을 가져옴
      const memoForDate = memos.find((item) => item.date === dateKey);

      if (memoForDate) {
        // 해당 날짜의 메모 목록이 이미 존재할 경우 추가
        const updatedMemos = memos.map((item) =>
          item.date === dateKey
            ? { ...item, memos: [...item.memos, memoText] }
            : item
        );
        setMemos(updatedMemos);
      } else {
        // 해당 날짜의 메모 목록이 없을 경우 새로 추가
        setMemos([...memos, { date: dateKey, memos: [memoText] }]);
      }

      setMemoText("");
    }
  };
  console.log(memos);

  const deleteMemo = (dateKey, idx) => {
    const updatedMemo = memos.filter((_, i) => i !== idx);
    setMemos(updatedMemo);
    const updatedMemos = memos.map((item) =>
      item.date === dateKey
        ? { ...item, memos: item.memos.filter((_, i) => i !== idx) }
        : item
    );
    setMemos(updatedMemos);
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
            <div key={day} className="day" onClick={() => handleDateClick(day)}>
              {day}
            </div>
          ))}
        </div>
        {showModal && (
          <div className="modal">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>
              {currentDate.getMonth() + 1}월 {selectedDate}일 메모
            </h2>
            <div className="memoContainer">
              <textarea
                className="textarea"
                rows="4"
                cols="30"
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
                placeholder="메모를 입력하세요..."
              ></textarea>
              <button onClick={addMemo}>저장</button>
            </div>

            {memos.map((item) =>
              item.date === currentDate.toISOString().split("T")[0] ? (
                <div key={item.date}>
                  {item.memos.map((memo, idx) => (
                    <div key={idx} className="createdMemo">
                      <p>{memo}</p>
                      <span
                        className="close"
                        onClick={() => deleteMemo(item.date, idx)}
                      >
                        &times;
                      </span>
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    );
  };

  return <div>{renderCalendar()}</div>;
};

export default Calendar;
