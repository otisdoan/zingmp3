export default function RecentlyHeard() {
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/d/8/d/7/d8d7092da765cd84d3ceae7eaeaf4cd0.jpg",
      title: "Top 100 bài hát...",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/8/4/4/e/844e178586a44e4cf755ebfe60feadc5.jpg",
      title: "Today's V-Pop Hits",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/c/7/7/f/c77f428ea31981e69983c88516eca46d.jpg",
      title: "Top 100 Nhạc Rap...",
    },
    {
      image:
        "https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdqNqjITOmzYRWE1b8cY6YFiGbK0YgCFzZbMWLMAOzkXRy81rmft3tejbXGC2pQFEYnN4jfRuimhkDN02icqtlwgW1DPs72PwEfNLXdOOjWxVqANpPYYpQyg0rPPc3OCBhwMGjaDOemlVbSM6O8tJMxbLjUOmpRDwR86mblIeayxOfILYGUm6oWnXL7E4V3CR765GfjMS5ajCz236rGop3WnqnOFGZ9Ck-LJ5Wo0ifWl9Kb26CCfcAva20CPH3w9UcSPbvkMxXijzSo5pyMz2kcosiJObRqAxh0VKjeMVrmuizyIpnKg7Urco4MQ5JpTx6V9XXZLQ4UkSyaT6jLenguo3qf8m6lVG&size=thumb/240_240",
      title: "Album Karic",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/2/9/5/d/295d1acf510893079a8d92cc0bc92120.jpg",
      title: "Playlist Này Chill Phết",
    },
    {
      image:
        "https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdqNqjITOmzYRWE1b8cY6YFiGbK0YgCFzZbMWLMAOzkXRy81rmft3tejbXGC2pQFEYnN4jfRuimhkDN02icqtlwgW1DPs72PwEfNLXdOOjWxVqANpPYYpQyg0rPPc3OCBhwMGjaDOemlVbSM6O8tJMxbLjUOmpRDwR86mblIeayxOfILYGUm6oWnXL7E4V3CR765GfjMS5ajCz236rGop3WnqnOFGZ9Ck-LJ5Wo0ifWl9Kb26CCfcAva20CPH3w9UcSPbvkMxXijzSo5pyMz2kcosiJObRqAxh0VKjeMVrmuizyIpnKg7Urco4MQ5JpTx6V9XXZLQ4UkSyaT6jLenguo3qf8m6lVG&size=thumb/240_240",
      title: "Album Karic",
    },
  ];
  return (
    <>
      <div className="mt-4 flex flex-col gap-y-4">
        <h2 className="font-bold text-white text-[1.5rem]">Nghe Gần Đây</h2>
        <div className="flex items-center gap-x-[2rem]">
          {music.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4 hover:scale-105 duration-700 "
            >
              <img src={item.image} className="w-[10rem] rounded-md" />
              <p className="text-white font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
