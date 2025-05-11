import { Carousel } from "antd";
import RecentlyHeard from "../RecentlyHeard";
import RecommandHome from "../RecommandHome";
import Chill from "../Chill";
import NewRelease from "../NewRelease";
import BxhNewMusic from "../BxhNewMusic";
import ZingChart from "../ZingChart";
import Top100 from "../Top100";
import AlbumHot from "../AlbumHot";
import RadioTop from "../RadioTop";
import MusicPartner from "../MusicPartner";

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
        <NewRelease />
        <BxhNewMusic />
        <ZingChart />
        <Top100 />
        <AlbumHot />
        <RadioTop />
        <MusicPartner />
      </div>
    </>
  );
}
