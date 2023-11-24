import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const moveToPage = (path) => {
    navigate(path);
  };

  return (
    <div className="mainContainer">
      <button
        onClick={() => {
          moveToPage("/timer");
        }}
      >
        timer
      </button>
      <button
        onClick={() => {
          moveToPage("/todoList");
        }}
      >
        to-do-list
      </button>
      <button
        onClick={() => {
          moveToPage("/calender");
        }}
      >
        calender
      </button>
      <button
        onClick={() => {
          moveToPage("/clone");
        }}
      >
        clone
      </button>
      <button
        onClick={() => {
          moveToPage("/slide");
        }}
      >
        slide
      </button>
      <button
        onClick={() => {
          moveToPage("/nav");
        }}
      >
        nav
      </button>
      <button
        onClick={() => {
          moveToPage("/login");
        }}
      >
        login
      </button>
    </div>
  );
}
