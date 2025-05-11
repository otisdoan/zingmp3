import { IoMdArrowDroprightCircle } from "react-icons/io";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function ZingChart() {
  const zingchart = [
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/song-vn-2x.jpg",
    },
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_usuk.jpg",
    },
    {
      image:
        "https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/web_song_kpop.jpg",
    },
  ];
  const music = [
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/b/6/83b63226a4793c4a8d1838e0d3590b86.jpg",
      title: "Phim Ba Người",
      author: "Nguyễn Vĩ",
      percent: "61%",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/9/c/3/d9c3a6a09c4715ca6e26f62a988e31ca.jpg",
      title: "Kỵ Sĩ Và Ánh Sao",
      author: "Đông Nhi",
      percent: "21%",
    },
    {
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/2/9/5/d/295d1acf510893079a8d92cc0bc92120.jpg",
      title: "Cay",
      author: "Khắc Hưng, Jimmii Nguyễn",
      percent: "18%",
    },
  ];
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="mt-9">
        <div className="p-4 bg-[#512071] rounded-md">
          <div className="flex items-center gap-x-4 mb-4">
            <h2 className="text-white text-[2rem]">#zingchart</h2>
            <IoMdArrowDroprightCircle className="text-[2.2rem] text-white" />
          </div>
          <div className="flex items-center gap-x-4">
            <div className="w-[40%] flex flex-col gap-y-4">
              {music.map((item, index) => (
                <div
                  className="flex items-center justify-between bg-[#6c2f97be] p-3 rounded-md"
                  key={index}
                >
                  <div className="flex items-center gap-x-5">
                    <span className="text-[3rem] text-white">{index + 1}</span>
                    <div className="flex items-center gap-x-4">
                      <img className="w-[4rem] rounded-md" src={item.image} />
                      <div className="flex flex-col">
                        <span className="text-white">{item.title}</span>
                        <span className="text-[0.9rem] text-white">
                          {item.author}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="font-bold text-white text-[1.5rem]">
                    {item.percent}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-[60%]">
              <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-4 mt-9">
          {zingchart.map((item, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                className="rounded-lg hover:scale-105 duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
