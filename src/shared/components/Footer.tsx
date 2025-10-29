import React, { type JSX, type ReactElement } from "react";
import logoFooter from "@/assets/images/footer/logo.png";


type SocialMediaLink = {
  id: number
  name?: string;
  url?: string;
  icon?: string | React.ReactNode;
  width?: number;
  height?: number;
}

type LinkGroups = {
  title: string;
  links: { label: string; href: string }[];
};

const LeftFooter: React.FC = () => {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      id: 1,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/Facebook-on.png",
    },
    {
      id: 12,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/Insta-on.png",
    },
    {
      id: 31,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/Youtube-on.png",
    },
    {
      id: 21,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/tumblr-on.png",
    },
    {
      id: 42,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/twitter-on.png",
    },
    {
      id: 41,
      name: "",
      url: "/",
      icon: "src/assets/images/footer/pinterest-on.png",
    },
  ];
  const supplierLogos: SocialMediaLink[] = [
    {
      name: "",
      url: "/",
      icon: "/public/cfhs/image/logistic_NCC/logo-bo-cong-thuong-da-thong-bao1.png",
    },
    {
      name: "",
      url: "/",
      icon: "/public/cfhs/image/logistic_NCC/android1.png",
    },
    {
      name: "",
      url: "",
      icon: "/public/cfhs/image/logistic_NCC/appstore1.png",
    },
  ];
  return (
    <>
      <div className="w-1/3 grid grid-col-3 gap-5 pr-8 border-r border-[#cecece] h-fit">
        <div className="pt-3">
          <img
            src={logoFooter}
          />
        </div>
        <div className="text-[13px]">
          <p>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM</p>
          <p>60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
          <p>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</p>
        </div>
        <div className="w-[6.25rem] h-[1.875rem]">
          <a href={supplierLogos[0].url}>
            <img
              src={supplierLogos[0].icon}
            />
          </a>
        </div>
        <div className="flex gap-1">
          {socialMediaLinks.map((item) => (
            <a key={item.id} href={item.url}>
              <img
                src={item.icon}
              />
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          <a className="w-[110px]" href=""><img src={supplierLogos[1].icon} /></a>
          <a className="w-[110px]" href=""><img src={supplierLogos[2].icon} /></a>
        </div>
      </div>
    </>
  )
}

const RightFooter: React.FC = () => {
  const linkGruops: LinkGroups[] = [
    {
      title: "DỊCH VỤ",
      links: [
        { label: "Điều khoản sử dụng", href: "#" },
        { label: "Chính sách bảo mật thông tin cá nhân", href: "#" },
        { label: "Chính sách bảo mật thanh toán", href: "#" },
        { label: "Giới thiệu Fahasa", href: "#" },
        { label: "Hệ thống trung tâm - nhà sách", href: "#" },
      ],
    },
    {
      title: "Hỗ trợ",
      links: [
        { label: "Chính sách đổi - trả - hoàn tiền", href: "#" },
        { label: "Chính sách bảo hành - bồi hoàn", href: "#" },
        { label: "Chính sách vận chuyển", href: "#" },
        { label: "Chính sách khách sỉ", href: "#" },
      ],
    },
    {
      title: "Tài khoản của tôi",
      links: [
        { label: "Đăng nhập/Tạo mới tài khoản", href: "#" },
        { label: "Thay đổi địa chỉ khách hàng", href: "#" },
        { label: "Chi tiết tài khoản", href: "#" },
        { label: "Lịch sử mua hàng", href: "#" },
      ],
    },
  ]
  const contactInfo: SocialMediaLink[] = [
    {
      name: "60-62 Lê Lợi, Q.1, TP. HCM",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
        <path d="M0.433556 5.58558C0.433556 4.16219 0.937113 2.94693 1.94423 1.93982C2.95134 0.932702 4.1666 0.429144 5.58999 0.429144C7.01338 0.429144 8.22863 0.932702 9.23574 1.93982C10.2429 2.94693 10.7464 4.16219 10.7464 5.58558C10.7464 6.31741 10.6356 6.91832 10.4141 7.38831L6.74817 15.1834C6.64074 15.405 6.48128 15.5795 6.26979 15.7071C6.0583 15.8347 5.83169 15.8984 5.58999 15.8984C5.34828 15.8984 5.12168 15.8347 4.91018 15.7071C4.69869 15.5795 4.54259 15.405 4.44187 15.1834L0.765904 7.38831C0.544338 6.91832 0.433556 6.31741 0.433556 5.58558ZM3.76711 3.7627C3.76711 3.7627 3.64122 3.88859 3.38944 4.14036C3.13766 4.39214 3.01177 4.87388 3.01177 5.58558C3.01177 6.29727 3.26355 6.9049 3.76711 7.40845C4.27067 7.91201 4.87829 8.16379 5.58999 8.16379C6.30168 8.16379 6.90931 7.91201 7.41287 7.40845C7.91642 6.9049 8.1682 6.29727 8.1682 5.58558C8.1682 4.87388 7.91642 4.26625 7.41287 3.7627C6.90931 3.25914 6.30168 3.00736 5.58999 3.00736C4.87829 3.00736 4.27067 3.25914 3.76711 3.7627Z" fill="#333333" />
      </svg>
    },
    {
      name: "cskh@fahasa.com.vn",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" fill="none">
        <path d="M0.88623 13.2871V5.29056C1.18165 5.61955 1.52071 5.91161 1.90342 6.16675C4.33392 7.81842 6.00238 8.9766 6.90878 9.64129C7.29148 9.92329 7.60201 10.1432 7.84036 10.301C8.07871 10.4587 8.39595 10.6199 8.79209 10.7844C9.18822 10.9489 9.55749 11.0311 9.89991 11.0311H9.90998H9.92006C10.2625 11.0311 10.6318 10.9489 11.0279 10.7844C11.424 10.6199 11.7413 10.4587 11.9796 10.301C12.218 10.1432 12.5285 9.92329 12.9112 9.64129C14.0526 8.81546 15.7244 7.65728 17.9266 6.16675C18.3093 5.9049 18.645 5.61283 18.9337 5.29056V13.2871C18.9337 13.7302 18.776 14.1095 18.4604 14.4251C18.1448 14.7407 17.7655 14.8984 17.3224 14.8984H2.49762C2.05448 14.8984 1.67514 14.7407 1.35957 14.4251C1.04401 14.1095 0.88623 13.7302 0.88623 13.2871ZM0.88623 2.5512C0.88623 2.0275 1.02555 1.59109 1.30418 1.24195C1.58282 0.892818 1.98063 0.718252 2.49762 0.718252H17.3224C17.7588 0.718252 18.1364 0.876033 18.4554 1.1916C18.7743 1.50716 18.9337 1.88651 18.9337 2.32964C18.9337 2.86005 18.7692 3.36697 18.4403 3.85038C18.1113 4.3338 17.7017 4.74671 17.2116 5.08913C14.6871 6.84151 13.116 7.93256 12.4983 8.36226C12.4311 8.40926 12.2885 8.51165 12.0702 8.66943C11.852 8.82721 11.6708 8.95478 11.5264 9.05213C11.3821 9.14949 11.2075 9.25859 11.0027 9.37944C10.7979 9.5003 10.6049 9.59094 10.4236 9.65137C10.2423 9.71179 10.0745 9.74201 9.92006 9.74201H9.90998H9.89991C9.74549 9.74201 9.57764 9.71179 9.39636 9.65137C9.21507 9.59094 9.02204 9.5003 8.81726 9.37944C8.61248 9.25859 8.43792 9.14949 8.29356 9.05213C8.14921 8.95478 7.96793 8.82721 7.74972 8.66943C7.53151 8.51165 7.38884 8.40926 7.3217 8.36226C6.71071 7.93256 5.83117 7.31989 4.68306 6.52427C3.53494 5.72865 2.84675 5.25027 2.61847 5.08913C2.20219 4.80714 1.80942 4.4194 1.44014 3.92591C1.07087 3.43243 0.88623 2.97419 0.88623 2.5512Z" fill="#333333" />
      </svg>,
    },
    {
      name: "1900636467",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M0.149902 3.84331C0.149902 3.22561 0.321112 2.6012 0.663531 1.97008C1.03952 1.29195 1.39537 0.882391 1.73107 0.741395C1.89893 0.66754 2.12888 0.597042 2.42095 0.529901C2.71301 0.46276 2.94968 0.42919 3.13096 0.42919C3.22496 0.42919 3.29546 0.43926 3.34246 0.459403C3.46331 0.499687 3.64124 0.754823 3.87623 1.22481C3.95008 1.35238 4.0508 1.53366 4.17836 1.76865C4.30593 2.00365 4.42343 2.21682 4.53085 2.40817C4.63828 2.59952 4.74235 2.77913 4.84306 2.94698C4.8632 2.97383 4.92195 3.05776 5.01931 3.19876C5.11666 3.33975 5.18884 3.45893 5.23584 3.55628C5.28283 3.65364 5.30633 3.74931 5.30633 3.84331C5.30633 3.97759 5.21066 4.14544 5.01931 4.34687C4.82795 4.54829 4.61982 4.73293 4.39489 4.90078C4.16997 5.06863 3.96183 5.24656 3.77048 5.43455C3.57913 5.62255 3.48345 5.77697 3.48345 5.89783C3.48345 5.95825 3.50024 6.03379 3.53381 6.12443C3.56738 6.21507 3.59592 6.28389 3.61942 6.33089C3.64291 6.37788 3.68991 6.45845 3.76041 6.57259C3.83091 6.68673 3.86952 6.75052 3.87623 6.76395C4.3865 7.68378 4.97063 8.47268 5.62861 9.13067C6.28659 9.78865 7.0755 10.3728 7.99533 10.883C8.00876 10.8898 8.07254 10.9284 8.18668 10.9989C8.30082 11.0694 8.38139 11.1164 8.42839 11.1399C8.47539 11.1634 8.54421 11.1919 8.63485 11.2255C8.72549 11.259 8.80102 11.2758 8.86145 11.2758C8.9823 11.2758 9.13673 11.1801 9.32472 10.9888C9.51272 10.7974 9.69064 10.5893 9.8585 10.3644C10.0263 10.1395 10.211 9.93132 10.4124 9.73997C10.6138 9.54862 10.7817 9.45294 10.916 9.45294C11.01 9.45294 11.1056 9.47644 11.203 9.52344C11.3003 9.57044 11.4195 9.64262 11.5605 9.73997C11.7015 9.83733 11.7854 9.89607 11.8123 9.91622C11.9802 10.0169 12.1598 10.121 12.3511 10.2284C12.5425 10.3358 12.7556 10.4533 12.9906 10.5809C13.2256 10.7085 13.4069 10.8092 13.5345 10.883C14.0045 11.118 14.2596 11.296 14.2999 11.4168C14.32 11.4638 14.3301 11.5343 14.3301 11.6283C14.3301 11.8096 14.2965 12.0463 14.2294 12.3383C14.1622 12.6304 14.0917 12.8604 14.0179 13.0282C13.8769 13.3639 13.4673 13.7198 12.7892 14.0957C12.1581 14.4382 11.5337 14.6094 10.916 14.6094C10.7347 14.6094 10.5584 14.5976 10.3872 14.5741C10.216 14.5506 10.023 14.5087 9.80814 14.4482C9.59329 14.3878 9.43383 14.3391 9.32976 14.3022C9.22569 14.2653 9.03938 14.1965 8.77081 14.0957C8.50225 13.995 8.33775 13.9346 8.27732 13.9145C7.61934 13.6795 7.03186 13.4008 6.51487 13.0786C5.65547 12.5481 4.76753 11.8247 3.85105 10.9082C2.93458 9.99175 2.21113 9.10381 1.68072 8.24441C1.35844 7.72742 1.07981 7.13994 0.844812 6.48195C0.82467 6.42153 0.764243 6.25703 0.663531 5.98847C0.56282 5.7199 0.494 5.53359 0.457073 5.42952C0.420145 5.32545 0.371468 5.16599 0.311041 4.95114C0.250614 4.73629 0.208651 4.54326 0.185151 4.37205C0.161652 4.20084 0.149902 4.02459 0.149902 3.84331Z" fill="#333333" />
      </svg>,
    },
  ]
  const supplierLogos: SocialMediaLink[] = [
    {
      name: "logo_lex",
      icon: "/public/cfhs/image/logistic_NCC/logo_lex.png",
      width: 90,
    },
    {
      icon: "/public/cfhs/image/logistic_NCC/Logo_ninjavan.png",
      name: "Logo_ninjavan",
      width: 150,
    },
    {
      icon: "/public/cfhs/image/logistic_NCC/vnpost1.png",
      name: "vnpost",
      width: 100,
    },
  ]
  const supplierLogos2: SocialMediaLink[] = [
    {
      icon: "/public/cfhs/image/logistic_NCC/vnpay_logo.png",
      name: "vnpay_logo",
      width: 120,
    },
    {
      icon: "/public/cfhs/image/logistic_NCC/momopay.png",
      name: "momopay",
      width: 50,
    },
    {
      icon: "/public/cfhs/image/logistic_NCC/shopeepay_logo.png",
      name: "shopeepay_logo",
      height: 44,
    },

    {
      icon: "/public/cfhs/image/logistic_NCC/logo_zalopay_2.png",
      name: "logo_zalopay",
      height: 40,
    },
  ]

  return (
    <>
      <div className="flex flex-col pl-8">
        <div className=" grid grid-cols-3 gap-6">
          {linkGruops.map((col) => (
            <div className="ml-3">
              <h3 className="uppercase text-base text-black font-bold">{col.title}</h3>
              <ul className="text-[13px] text-nowrap leading-8 flex flex-col">
                {
                  col.links.map((link) => (
                    <li className="
                            relative inline-block text-black transition-all duration-300
                            hover:text-[#ea7696] hover:translate-x-3
                            before:content-[''] before:absolute before:-left-3 before:top-full
                            before:w-[12px] before:h-[2px] before:bg-[#ea7696]
                            before:opacity-0 before:transition-all before:duration-300
                            hover:before:opacity-50 hover:before:-translate-y-4 hover:before:-translate-x-3
                                  ">
                      <a href={link.href}>{link.label}</a>
                    </li>

                  ))
                }
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-5">
          <h3 className="uppercase text-base text-black font-bold mb-2">Liên hệ</h3>
          <div className="grid grid-cols-3 gap-15">
            {
              contactInfo.map((contact) => (
                <div className="flex">
                  {contact.icon} &nbsp;<p>{contact.name}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="grid grid-cols-3 justify-items-center content-around gap-4 pt-5 pt-5">
          {
            supplierLogos.map((s) => (
              <div>
                <img src={s.icon} alt={s.name} style={{ width: s.width, height: s.height }} />
              </div>
            ))

          }
        </div>
        <div className="grid grid-cols-4 justify-items-center content-around gap-4 pt-5">
          {
            supplierLogos2.map((s) => (
              <div className="">
                <img src={s.icon} alt={s.name} style={{ width: s.width, height: s.height }} />
              </div>
            ))

          }
        </div>

      </div>


    </>
  )
}

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="bg-white px-5 py-3 rounded-lg">
          <div className="flex">
            <LeftFooter />
            <RightFooter />
          </div>
          <div className="text-[#ADADAD] text-[13px] text-center text-nowrap">
            <p className=" pt-5 pb-2">Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</p>
          </div>
        </div>
      </footer>


    </>

  );
};

export default Footer;
