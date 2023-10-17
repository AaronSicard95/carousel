import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx>=total-1?0:currCardIdx+1)
    if(currCardIdx==total-2){
      document.getElementById("rarrow").classList = 'hidden';
    } else{
      document.getElementById("larrow").classList="bi bi-arrow-left-circle";
    }
  }
  function goBackward() {
    setCurrCardIdx(currCardIdx<=0?total-1:currCardIdx-1)
    if(currCardIdx==1){
      document.getElementById("larrow").classList = 'hidden';
    }else{
      document.getElementById("rarrow").classList="bi bi-arrow-right-circle";
    }
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          id="larrow"
          className="bi bi-arrow-left-circle"
          onClick={goBackward}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          id="rarrow" 
          data-testid="1"
          className="bi bi-arrow-right-circle"
          onClick={goForward}
        />
      </div>
    </div>
  );
  
}

export default Carousel;
