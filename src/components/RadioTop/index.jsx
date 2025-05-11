import { Carousel } from "antd";
import { IoIosArrowForward } from "react-icons/io";

export default function RadioTop() {
  const radio = [
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "V-POP",
      listener: "416 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "Chạm",
      listener: "161 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "Bolero",
      listener: "365 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "US-UK",
      listener: "59 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "K-POP",
      listener: "32 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "Acoustic",
      listener: "59 đang nghe",
    },
    {
      image1:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      image2:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      title: "Rap Việt",
      listener: "41 đang nghe",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white text-[1.5rem]">Radio Nổi Bật</h2>
          <p className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </p>
        </div>
        <Carousel
          slidesToShow={7}
          slidesToScroll={1}
          dots={false}
          arrows={false}
        >
          {radio.map((item, index) => (
            <div className="px-4" key={index}>
              <div className="flex flex-col text-white items-center relative">
                <div className="rounded-full w-[9.5rem] h-[9.5rem] overflow-hidden border-[4px] border-[#ff4b4a]">
                  <img
                    src={item.image1}
                    className=" w-full h-full hover:scale-110 duration-700"
                  />
                </div>
                <div className="p-2 flex items-center justify-center bg-[#ff0a0a] w-[2.5rem] h-[1.3rem] rounded-md mb-4 mt-[-10px]">
                  <span className="text-white font-bold text-[0.7rem]">
                    LIVE
                  </span>
                </div>
                <span className="font-bold">{item.title}</span>
                <span className="font-medium opacity-65">{item.listener}</span>
                <div className="w-[3.5rem] h-[3.5rem] overflow-hidden rounded-full absolute top-[5.5rem] right-[-0.5rem]">
                  <img src={item.image2} className="w-full h-full" />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
