export default function MusicPartner() {
  const partner = [
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/monstercat.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/SM-Entertainment.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/genie.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/stone-music.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/universal-1.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/orcahrd.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/empire.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/believe.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/kakao.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/FUGA.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/yg.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/ingrooves.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/danal.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/route-note.png",
    },
    {
      image:
        "https://static-zmp3.zmdcdn.me/skins/zmp3-v6.1/images/partner_logo/sony.png",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <h3 className="font-medium opacity-65 text-white text-center mb-4">
          ĐỐI TÁC ÂM NHẠC
        </h3>
        <div className="flex items-center gap-4 flex-wrap">
          {partner.map((item, index) => (
            <div
              className=" w-[11.1%] bg-white h-[5rem] p-5 rounded-md"
              key={index}
            >
              <img src={item.image} className="rounded-md w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
