import { useState } from "react";
import images from "../data/images"; // 제공되는 이미지를 이용하세요
import Thumbnail from "../component/Thumbnail"

function Gallery() {
  // console.log(images) // npm start를 통해 앱을 열어, 개발자 콘솔을 통해 이미지 목록을 확인할 수 있습니다
  const [isImages, setisImages] = useState(images[0]);

  const handleClick = (image) => {
    // TIP: parameter로 이미지가 전달어야 하며, 이벤트 객체는 쓰지 않습니다
    // TODO
    // setisImages(image.target.value);
    setisImages(images[image]);
  }

  return <div>
    <h2>전체 목록</h2>
    <div id="list" className="flex">
      <a onClick={() => handleClick(0)}>
        <Thumbnail source={images[0].src} />
      </a>
      <a onClick={() => handleClick(1)}>
        <Thumbnail source={images[1].src} />
      </a>
      <a onClick={() => handleClick(2)}>
        <Thumbnail source={images[2].src} />
      </a>
    </div>
    <div>
      {/* TODO: 아래 하드코딩된 내용 대신에, 목록 선택에 따른 이미지를 표시하세요 */}
      <span><h2>{isImages.alt}</h2></span>
      <img id="current-image" src={isImages.src}/>
    </div>
  </div>
}

export default Gallery;
