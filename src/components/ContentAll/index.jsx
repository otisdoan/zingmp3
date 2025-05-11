export default function ContentAll() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/0/9/b/8/09b82405f54b9da1b70e4a91fea85d4e.jpg",
      title: "Can I Call You",
      author: "David Archuleta",
      time: "1 ngày trước",
    },
  ];
  return (
    <>
      <div className="flex flex-wrap gap-y-4">
        {music.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-4 w-1/3 text-white"
          >
            <img src={item.image} className="w-[3.8rem] rounded-sm" />
            <div className="flex flex-col">
              <div className="flex items-center gap-x-2">
                <span className="font-medium text-[1.1rem]">{item.title}</span>
                <div className="flex items-center justify-center text-white bg-[#e5ac1a] font-bold text-[0.7rem] p-1 rounded-[5px]">
                  PREMIUM
                </div>
              </div>
              <span className="text-[0.8rem] opacity-95">{item.author}</span>
              <span className="text-[0.8rem] opacity-95">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
