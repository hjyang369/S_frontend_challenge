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
    </div>
  );
}