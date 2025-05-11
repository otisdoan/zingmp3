import { Carousel } from "antd";
import { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function BxhNewMusic() {
  const carouselRef = useRef();
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/5/6/a/d56a00088aa6274600d00f66f9240496.jpg",
      title: "Không lời",
      author: "Thiều Bảo Trâm",
      rank: "#1",
      date: "08.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/f/a/2/3fa2e4ac4049f11b1b352aa82484a9a6.jpg",
      title: "10 Mất 1 Còn Không",
      author: "Lê Gia Bảo, BMZ",
      rank: "#2",
      date: "09.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/3/4/1/7341e4e77e353f6968573efee1541c76.jpg",
      title: "01 Ngoại Lệ",
      author: "Jack - J97",
      rank: "#3",
      date: "05.05.2025",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/5/0/1/050158601068bfb3b08fd8da7276a32d.jpg",
      title: "Đừng Buồn Phiền Nữa",
      author: "Tùng Dương, Nguyễn Thương",
      rank: "#4",
      date: "07.05.2025",
    },
  ];
  return (
    <>
      <div className="mt-9 relative">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white text-[1.5rem]">BXH Nhạc Mới</h2>
          <p className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </p>
        </div>
        <Carousel
          slidesToShow={3}
          slidesToScroll={1}
          autoplay
          dots={false}
          ref={carouselRef}
          className=""
        >
          {music.map((item, index) => (
            <div className="px-2" key={index}>
              <div className="flex gap-x-4 p-4 rounded-md bg-[#2f2739] text-white h-[10rem] w-[25rem]">
                <img
                  src={item.image}
                  className="w-[8rem] rounded-md hover:scale-105 duration-700"
                />
                <div className="flex flex-col w-full h-full">
                  <span className="font-bold">{item.title}</span>
                  <span className="font-medium opacity-65">{item.author}</span>
                  <div className="flex items-center justify-between mt-[1.5rem]">
                    <span className="text-[3rem] text-white">{item.rank}</span>
                    <span className="font-medium opacity-65">{item.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div
          className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center cursor-pointer absolute top-[7.5rem] left-[-1rem]"
          onClick={() => carouselRef.current.prev()}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div
          className="rounded-full h-[30px] w-[30px] bg-white text-black flex items-center justify-center absolute top-[7.5rem] right-[-1rem]"
          onClick={() => carouselRef.current.next()}
        >
          <MdKeyboardArrowRight />
        </div>
      </div>
    </>
  );
}
