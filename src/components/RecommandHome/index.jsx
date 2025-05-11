import { Button } from "antd";
import { CiUndo } from "react-icons/ci";

export default function RecommandHome() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/c/3/f/9/c3f9093c38b9cf58a1672c38bc659772.jpg",
      title: "Mưa Tháng Sáu",
      description: "Văn Mai Hương",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-white text-[1.5rem]">Gợi Ý Cho Bạn</h2>
          <Button className="flex items-center bg-[#8e46cd] h-9 rounded-[20px]">
            <CiUndo className="text-white text-[1.2rem] font-bold" />
            <p className="font-bold text-white">LÀM MỚI</p>
          </Button>
        </div>
        <div className="flex items-center flex-wrap gap-y-4">
          {music.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-1/3 text-white gap-x-4"
            >
              <img
                src={item.image}
                className="w-[5rem] rounded-md hover:scale-105 duration-700"
              />
              <div className="flex flex-col"> 
                <span className="font-bold">{item.title}</span>
                <span className="opacity-70">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
