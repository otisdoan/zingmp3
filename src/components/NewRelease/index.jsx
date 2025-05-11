import { ConfigProvider, Tabs } from "antd";
import ContentAll from "../ContentAll";
import { IoIosArrowForward } from "react-icons/io";
import ContentVietNam from "../ContentVietNam";
import ContentQuocTe from "../ContentQuocTe";

export default function NewRelease() {
  const items = [
    {
      key: "1",
      label: (
        <div className="tab-label w-[7rem] h-[1.7rem] cursor-pointer rounded-[20px] bg-[#170f23] flex items-center justify-center border-[1px]">
          <p className="text-white">TẤT CẢ</p>
        </div>
      ),
      children: <ContentAll />,
    },
    {
      key: "2",
      label: (
        <div className="tab-label w-[7rem] h-[1.77rem] cursor-pointer rounded-[20px] bg-[#170f23] flex items-center justify-center border-[1px]">
          <p className="text-white">VIỆT NAM</p>
        </div>
      ),
      children: <ContentVietNam />,
    },
    {
      key: "3",
      label: (
        <div className="tab-label w-[7rem] h-[1.7rem] cursor-pointer rounded-[20px] bg-[#170f23] flex items-center justify-center border-[1px]">
          <p className="text-white">QUỐC TẾ</p>
        </div>
      ),
      children: <ContentQuocTe />,
    },
  ];
  return (
    <>
      <div className="mt-9">
        <h2 className="font-bold text-white text-[1.5rem] mb-4">
          Mới phát hành
        </h2>
        <div className="flex items-center justify-between">
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  inkBarColor: "none",
                  cardBg: "red",
                },
              },
              token: {
                colorBorderSecondary: "#170f23",
              },
            }}
          >
            <Tabs items={items} defaultActiveKey="1" />
          </ConfigProvider>
          {/* <div className="flex items-center gap-x-4 text-white font-bold opacity-75">
            <span className="">TẤT CẢ</span>
            <IoIosArrowForward />
          </div> */}
        </div>
      </div>
    </>
  );
}
