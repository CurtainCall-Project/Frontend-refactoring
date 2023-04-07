import navigationInfo from "@/router/navigationInfo";
import {Container, Name} from "./style";
import Link from "next/link";

interface bottomBarProps {
  navName: string;
}

function Bottombar({navName}: bottomBarProps) {
  const navInfo = navigationInfo[navName];

  return (
    <Container>
      {navInfo?.map((info) => (
        <Link key={info.label} href={{pathname: info.pathname}}>
          <Name>{info.label}</Name>
        </Link>
      ))}
    </Container>
  );
}

export default Bottombar;
