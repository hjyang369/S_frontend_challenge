import "./style.css";
import Tag from "./Tag";

export default function Card({ data }) {
  return (
    <div className="cardContainer">
      <img
        className="img"
        alt="img"
        src="https://cdn-upload.miniintern.com/41048/6d7de4b5-5254-4916-b910-849efce82b73/%ED%96%89%EC%95%84%EC%9B%83-%EC%BB%A4%EB%B2%84%EC%9D%B4%EB%AF%B8%EC%A7%80.png"
      ></img>
      <div className="content">
        <div>
          <Tag data={data} />
          <p>제목</p>
        </div>
        <p>빈크런치 브랜드 및 제품을 효과적으로 알리기 위한 SNS 콘텐츠 제작</p>
      </div>
    </div>
  );
}
