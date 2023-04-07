import Footer from "../Footer/Index";
import Header from "../Header";
import {Container} from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;
