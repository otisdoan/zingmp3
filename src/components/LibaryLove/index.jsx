import { ConfigProvider, Table } from "antd";
import { CiMusicNote1 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
export default function LibaryLove() {
  const columns = [
    {
      title: "BÀI HÁT",
      dataIndex: "music",
      render: (_, record) => (
        <div className="flex items-center gap-x-4">
          <CiMusicNote1 className="text-[1.1rem]" />
          <img src={record.image} className="w-[3rem] rounded-md" />
          <div className="flex flex-col">
            <span className="font-medium">{record.music}</span>
            <span className="opacity-85">{record.author}</span>
          </div>
        </div>
      ),
    },
    {
      title: "ALBUM",
      dataIndex: "album",
      render: (_, record) => (
        <span className="opacity-65 text-[0.9rem]">{record.album}</span>
      ),
    },
    {
      title: "THỜI GIAN",
      dataIndex: "time",
      render: (_, record) => (
        <div className="flex items-center gap-x-4">
          <FaHeart className="text-[#a020f0] text-[0.85rem]" />
          <span className="text-[0.85rem] opacity-65 font-medium">
            {record.time}
          </span>
        </div>
      ),
    },
  ];

  const data = [
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
    {
      music: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      album: "Fragile",
      time: "05:10",
      image:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/5/6/c/d/56cd9130ab4c54b3d3e74ec6d656ea04.jpg",
    },
  ];
  return (
    <>
      <div className="w-full text-white">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#170f23",
                footerBg: "#170f23",
              },
            },
            token: {
              colorBgContainer: "#170f23",
              colorText: "white",
            },
          }}
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </ConfigProvider>
      </div>
    </>
  );
}
