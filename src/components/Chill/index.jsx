import { IoIosArrowForward } from "react-icons/io";
export default function Chill() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/b/6/83b63226a4793c4a8d1838e0d3590b86.jpg",
      descriptions: "Thả mình cùng những giai điệu V-Pop nhẹ nhàng",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/3/c/2/43c26ef02ac1dce456a4e7477155981b.jpg",
      descriptions:
        "Dừng lại đây, thả trôi cùng những bài hát bồng bềnh tựa...",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
      descriptions: "Đắm say với nỗi buồn qua những giai điệu cực chill",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/0/b130381bdaed5df3ddfff9549d859510.jpg",
      descriptions: "Thanh âm Lofi Việt nghe không dứt ra được ",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/b/e/6/9be6f892a7f95ef25632752dd2a319c2.jpg",
      descriptions: "Lắng nghe những giai điệu nhạc Hoa lời Việt nhẹ nhàng",
    },
  ];
  return (
    <>
      <div className="mt-9 flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-white text-[1.5rem]">Chill</h2>
          <p className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          {music.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4 items-start overflow-hidden"
            >
              <img
                src={item.image}
                className="w-[14rem] h-[13rem] rounded-md hover:scale-110 duration-700 "
              />
              <p className="text-white pr-8 ">{item.descriptions}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
