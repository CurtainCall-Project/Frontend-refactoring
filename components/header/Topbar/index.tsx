import {Container, Logo, RightWrap} from "./style";
import Search from "../Search";
import Link from "next/link";
import Image from "next/image";
import instaIcon from "../../../public/instagram.svg";
import logo from "../../../public/logo.svg";

function Topbar() {
  return (
    <Container>
      <Link href="/">
        <Logo src={logo} alt="Logo of CurtainCall" />
      </Link>
      <RightWrap>
        <Search />
        <Link href="/signin">회원가입/로그인</Link>
        <Link href="">
          <Image src={instaIcon} alt="Icon of Instagram" />
        </Link>
      </RightWrap>
    </Container>
  );
}

export default Topbar;
