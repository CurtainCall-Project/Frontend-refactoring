import Image from "next/image";
import searchIcon from "../../../public/search.svg";
import {Form, Input} from "./style";

function Search() {
  return (
    <Form>
      <label htmlFor="search">
        <Image src={searchIcon} alt="검색" />
      </label>
      <Input id="search" />
    </Form>
  );
}

export default Search;
