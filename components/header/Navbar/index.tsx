import {Topbar, Title} from "./style";
import Bottombar from "../Bottombar";
import {useState} from "react";

function Navbar() {
  const [navName, setNavName] = useState("게시판");
  const navList = ["게시판", "마켓", "공연후기", "마이페이지", "글쓰기"];

  const showNavbar = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const eventTarget = e.target as HTMLElement;
    const name = eventTarget.innerText;
    if (!navList.includes(name)) return;
    setNavName(name);
  };

  return (
    <nav>
      <Topbar onMouseOver={showNavbar}>
        {navList.map((name) => (
          <Title key={name}>{name}</Title>
        ))}
      </Topbar>
      <Bottombar navName={navName} />
    </nav>
  );
}

export default Navbar;
