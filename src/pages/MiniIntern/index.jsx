import "./style.css";
import Nav from "./Nav/index";
import Card from "./Card";
import Slide from "../Slide";

export default function Clone() {
  return (
    <div>
      <Nav />
      <main className="mainContainer">
        <div className="mainImg">
          <img
            className="img1"
            alt="1"
            src="https://miniintern.com/static/images/main/main_img_1.webp"
          ></img>
          <img
            className="img2"
            alt="2"
            src="https://miniintern.com/static/images/main/main_img_r_1.webp"
          ></img>
        </div>

        <h2>미니 인턴으로 취업하세요.</h2>
        <h4>취업하고 싶어요~</h4>
        <div className="assignmentCard">
          {arr.map((idx) => {
            return <Card key={idx} />;
          })}
        </div>
        <Slide />
      </main>
    </div>
  );
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
