import { Carousel } from "antd";
import RecentlyHeard from "../RecentlyHeard";
import RecommandHome from "../RecommandHome";
import Chill from "../Chill";

export default function ContentHome() {
  return (
    <>
      <div className="">
        <Carousel autoplay>
          <div>
            <img
              src={
                "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/c/c/2/8/cc2879333c111202419e9a5b5357837e.jpg"
              }
            />
          </div>
          <div>
            <img
              src={
                "https://photo-resize-zmp3.zmdcdn.me/w2160_r10x1_jpeg/banner/c/c/2/8/cc2879333c111202419e9a5b5357837e.jpg"
              }
            />
          </div>
        </Carousel>
        <RecentlyHeard />
        <RecommandHome />
        <Chill />
      </div>
    </>
  );
}
