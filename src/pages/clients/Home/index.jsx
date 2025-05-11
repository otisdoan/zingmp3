import { Input, Layout, Menu } from "antd";
import logo from "../../../assets/logo-dark.svg";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { FaRegDotCircle } from "react-icons/fa";
import { FaStumbleuponCircle } from "react-icons/fa";
import { MdOutlineRadio } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import HeaderHome from "../../../components/Header";
import ContentHome from "../../../components/Content";
const { Header, Content, Footer, Sider } = Layout;
export default function Home() {
  const items = [
    {
      key: "1",
      icon: <MdOutlineLibraryMusic />,
      label: "Thư viện",
    },
    {
      key: "2",
      icon: <FaRegDotCircle />,
      label: "Khám phá",
    },
    {
      key: "3",
      icon: <FaStumbleuponCircle />,
      label: "#zingchart",
    },
    {
      key: "4",
      icon: <MdOutlineRadio />,
      label: "Radio",
    },
    {
      key: "5",
      icon: <BsMusicNoteList />,
      label: "BXH Nhạc mới",
    },
    {
      key: "6",
      icon: <CgMenuGridR />,
      label: "Chủ đề & Thể loại",
    },
    {
      key: "7",
      icon: <CiStar />,
      label: "Top 100",
    },
  ];
  return (
    <>
      <Layout>
        <Sider breakpoint="lg" className="">
          <div className="">
            <img src={logo} className="p-4 w-[10rem]" />
          </div>
          <Menu theme="dark" items={items} />
        </Sider>
        <Layout>
          <HeaderHome />
          <Content className="bg-[#170f23] p-[3rem]">
            <ContentHome />
          </Content>
          <Footer className="bg-[#170f23]"></Footer>
        </Layout>
      </Layout>
    </>
  );
}
