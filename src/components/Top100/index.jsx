import { IoIosArrowForward } from "react-icons/io";
export default function Top100() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/a/8/f/7a8f953aa385d67fc1fa4ca7448fd3e8.jpg",
      title: "Top 100 Bài Hát Nhạc Trẻ...",
      descriptions: "Quang Hùng MasterD, Tăng Duy Tân, Tùng Dương...",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/6/3/2/0/63207ba6db02bac379928147081397b2.jpg",
      title: "Top 100 Pop Âu mỹ Hay Nhất",
      descriptions: "Taylor Swift, Sabrina Carpenter, Lady Gaga...",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/8/b/e/88beda8e70156635276e8430b966e4d6.jpg",
      title: "Top 100 Nhạc EDM Hay Nhất",
      descriptions: "Alan Walker, Martin Garrix, Avicii...",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/3/b/a/d3bacc13ea96ca8d58a1f9dda967f83f.jpg",
      title: "Top 100 Nhạc Trữ Tình Hay...",
      descriptions: "Quỳnh Trang, Dương Hồng Loan, Mạnh Quỳnh... ",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/9/c/3/d9c3a6a09c4715ca6e26f62a988e31ca.jpg",
      title: "Top 100 Nhạc Hàn Quốc Hay...",
      descriptions: "BABYMONSTER, aespa, BLACKPINK...",
    },
  ];
  return (
    <>
      <div className="mt-9 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-white text-[1.5rem]">Top 100</h2>
          <p className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          {music.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-1 items-start overflow-hidden"
            >
              <img
                src={item.image}
                className=" rounded-md hover:scale-110 duration-700 "
              />
              <span className="font-bold text-white mt-4">{item.title}</span>
              <p className="text-white pr-8 opacity-75">{item.descriptions}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
