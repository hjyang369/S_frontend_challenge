import "./nav.css";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Nav() {
  return (
    <div className="navContainer">
      <h1>미니인턴</h1>
      <div className="categorys">
        {arr.map((category) => {
          return <p key={category.id}>{category.name}</p>;
        })}
      </div>
      <div className="userContainer">
        <p>서비스 소개</p>
        <FontAwesomeIcon icon={faBell} />
        <img
          alt="유저사진"
          src="./images/IMG_7632.jpg"
          className="userImg"
        ></img>
        <p>유저1</p>
      </div>
    </div>
  );
}

const arr = [
  { id: 1, name: "카테고리1" },
  { id: 2, name: "카테고리2" },
  { id: 3, name: "카테고리3" },
  { id: 4, name: "카테고리4" },
  { id: 5, name: "카테고리5" },
];
