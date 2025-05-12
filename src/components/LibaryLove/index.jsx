import { ConfigProvider, Table } from "antd";

export default function LibaryLove() {
  const columns = [
    {
      title: "BÀI HÁT",
      dataIndex: "music",
    },
    {
      title: "ALBUM",
      dataIndex: "album",
    },
    {
      title: "THỜI GIAN",
      dataIndex: "time",
    },
  ];

  const data = [
    {
      music: "Tháng tư là lời nói dối của em",
      album: "Fragile",
      time: "05:10",
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
