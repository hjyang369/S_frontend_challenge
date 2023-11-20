import { useEffect, useState } from "react";
import "./style.css";

export default function Slide() {
  const [imgIdx, setImgIdx] = useState(0);

  const minusIdx = () => {
    if (imgIdx === 0) {
      setImgIdx(images.length - 1);
    } else {
      setImgIdx((pre) => pre - 1);
    }
  };
  const plusIdx = () => {
    if (imgIdx === images.length - 1) {
      setImgIdx(0);
    } else {
      setImgIdx((pre) => pre + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (imgIdx + 1) % images.length;
      setImgIdx(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [imgIdx, images.length]);

  return (
    <div className="slideContainer">
      <button className="moveBtn" onClick={minusIdx}>
        &#60;
      </button>
      <div className="imgContainer">
        <img alt="이미지" src={images[imgIdx]}></img>
      </div>
      <button className="moveBtn" onClick={plusIdx}>
        &#62;
      </button>
    </div>
  );
}

const images = [
  "./images/IMG_7632.jpg",
  "./images/IMG_7631.jpg",
  "https://item.kakaocdn.net/do/a936ccd0072a7ffa59902428d9aea5634022de826f725e10df604bf1b9725cfd",
  "https://mblogthumb-phinf.pstatic.net/MjAyMjEyMjlfMjg4/MDAxNjcyMjk3OTQxNzY1.3mqzawBLIq72GUrnesLHgRf8d8vn4mhFLGawgtdY43Qg.FEbrw0SYVLpn3VbTmUk6aMPjj0fpbbfjWnvdhx1Nzh4g.PNG.ryuvely9922/image.png?type=w800",
];
