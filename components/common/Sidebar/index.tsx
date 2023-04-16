import Link from "next/link";
import Image from "next/image";
import {Fragment} from "react";

import Search from "../Search";
import {navList} from "../Navbar";
import {Container, CloseBtn, Title, List, Name, LoginLink, Overlay} from "./style";

import navigationInfo from "@/router/navigationInfo";
import serviceUrl from "@/config/serviceUrl";
import instaIcon from "../../../public/instagram.svg";

interface SidebarProps {
  isOpen: boolean;
  handleSidebar?: (e: React.MouseEvent<any>) => void;
}

function Sidebar({isOpen, handleSidebar}: SidebarProps) {
  const content = navList.map((name, idx) => {
    return (
      <Fragment key={idx}>
        <Title>{name}</Title>
        <List>
          {navigationInfo[name]?.map((info) => (
            <Link key={info.label} href={info.pathname}>
              <Name>{info.label}</Name>
            </Link>
          ))}
        </List>
      </Fragment>
    );
  });

  return (
    <>
      <Container isOpen={isOpen}>
        <CloseBtn onClick={handleSidebar}>x</CloseBtn>
        <Search />
        <LoginLink href="/signin">회원가입/로그인</LoginLink>
        {content}
        <Link href={serviceUrl.insta}>
          <Image src={instaIcon} alt="Icon of Instagram" width={24} height={24} />
        </Link>
      </Container>
      <Overlay onClick={handleSidebar} isOpen={isOpen}></Overlay>
    </>
  );
}

export default Sidebar;
