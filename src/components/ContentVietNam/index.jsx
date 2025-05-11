export default function ContentVietNam() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/e/6/9/ae69eb67d1cee8ebfeda7623ec489079.jpg",
      title: "Young & Dumb",
      author: "Avril Lavigne, Simple Plan",
      time: "2 ngày trước",
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
