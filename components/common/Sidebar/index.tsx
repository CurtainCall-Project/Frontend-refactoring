import Search from "../Search";
import {Container, CloseBtn, Title, List, Name, LoginLink} from "./style";
import {navList} from "../Navbar";
import navigationInfo from "@/router/navigationInfo";
import Link from "next/link";
import Image from "next/image";
import instaIcon from "../../../public/instagram.svg";
import serviceUrl from "@/config/serviceUrl";

function Sidebar() {
  const content = navList.map((name) => {
    return (
      <>
        <Title>{name}</Title>

        <List>
          {navigationInfo[name]?.map((info) => (
            <Link key={info.label} href={info.pathname}>
              <Name>{info.label}</Name>
            </Link>
          ))}
        </List>
      </>
    );
  });

  return (
    <Container>
      <CloseBtn>x</CloseBtn>
      <Search />
      <LoginLink href="/signin">회원가입/로그인</LoginLink>
      {content}
      <Link href={serviceUrl.insta}>
        <Image src={instaIcon} alt="Icon of Instagram" />
      </Link>
    </Container>
  );
}

export default Sidebar;
