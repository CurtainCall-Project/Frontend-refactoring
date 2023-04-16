import {Container, Logo, RightWrap, MenuIcon} from "./style";
import Search from "../Search";
import Link from "next/link";
import Image from "next/image";
import instaIcon from "../../../public/instagram.svg";
import logo from "../../../public/logo.svg";
import serviceUrl from "@/config/serviceUrl";
import Sidebar from "../Sidebar";
import hamburger from "../../../public/hamburger.svg";
import theme from "@/styles/theme";
import {useState} from "react";
import isBrowser from "@/util/isBrowser";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  let handleSidebar = undefined;
  if (isBrowser() && window.matchMedia(theme.device.tablet)) {
    handleSidebar = () => setIsOpen((prev) => !prev);
  }

  return (
    <Container>
      <Link href="/">
        <Logo src={logo} alt="Logo of CurtainCall" />
      </Link>
      <RightWrap>
        <Search />
        <Link href="/signin">
          <span>회원가입/로그인</span>
        </Link>
        <Link href={serviceUrl.insta}>
          <Image src={instaIcon} alt="커튼콜 인스타그램" />
        </Link>
      </RightWrap>
      <MenuIcon src={hamburger} alt="메뉴 보기" width={16} height={16} onClick={handleSidebar} />
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
    </Container>
  );
}

export default Topbar;
