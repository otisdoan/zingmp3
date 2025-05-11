import { Carousel } from "antd";
import { IoIosArrowForward } from "react-icons/io";
export default function AlbumHot() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/0/8/3/0083362cfca93fe11eca33983e43e1a9.jpg",
      title: "Nếp Nhà (Single)",
      descriptions: "Hòa Minzy, Obito, Hứa Kim Tuyền",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/3/4/1/7341e4e77e353f6968573efee1541c76.jpg",
      title: "01 Ngoại Lệ (Singe)",
      descriptions: "Jack - J97",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/0/c/8/a0c85823ae2ef811cb0ce9abf6d505c5.jpg",
      title: "Thương Mãi Về Sau (Single)",
      descriptions: "Ong Mỹ Mỹ, Kaisoul, San Ji",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/9/6/f/996f9de465fea7d2761e547fb7f30162.jpg",
      title: "TANCA Season 1: Giấy Gấp...",
      descriptions: "Giấy Gấp, tanca",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/a/7/5/0a75a2a46b3bf3f2f114f00b6560f6f7.jpg",
      title: "Kẻ Ươm Hoa Ươm Mầm (Lofi)...",
      descriptions: "Châu Khải Phong",
    },
  ];
  return (
    <>
      <div className="mt-9 flex flex-col gap-y-4">
        <h2 className="font-bold text-white text-[1.5rem]">Album Hot</h2>
        <Carousel
          slidesToShow={5}
          slidesToScroll={1}
          autoplay
          dots={false}
          arrows={false}
        >
          {music.map((item, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col items-start overflow-hidden">
                <img
                  src={item.image}
                  className="rounded-md hover:scale-110 duration-700 w-[18rem]"
                />
                <span className="text-white font-bold mt-4">{item.title}</span>
                <p className="text-white pr-8 ">{item.descriptions}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
