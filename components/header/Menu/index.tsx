import Link from "next/link";
import {Container} from "./style";

function Menu() {
  return (
    <Container>
      <span>게시판</span>
      <span>마켓</span>
      <span>공연후기</span>
      <span>마이페이지</span>
      <span>글쓰기</span>
    </Container>
  );
}

export default Menu;
