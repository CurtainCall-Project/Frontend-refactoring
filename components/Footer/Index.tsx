import {Container} from "./style";
import Link from "next/link";
import serviceUrl from "@/config/serviceUrl";

function Footer() {
  return (
    <Container>
      <span>
        <Link href={serviceUrl.privacy}>개인정보처리방침</Link>
      </span>
      <span>
        <Link href={serviceUrl.usage}>이용약관</Link>
      </span>
      <span>
        <Link href={serviceUrl.inquiry}>문의</Link>
      </span>
      <span>Contact curtaincall780@gmail.com</span>
    </Container>
  );
}

export default Footer;
