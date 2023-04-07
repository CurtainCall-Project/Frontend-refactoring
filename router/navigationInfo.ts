export const boardLinkInfo = [
  {
    pathname: "/free",
    label: "자유",
    // isAuthorized: false,
  },
  {
    pathname: "/sight",
    label: "시야",
  },
  {
    pathname: "/new",
    label: "새내기",
  },
];

export const marketLinkInfo = [
  {
    pathname: "/rent",
    label: "대여",
  },
  {
    pathname: "/sell",
    label: "거래",
  },
];

export const reviewLinkInfo = [
  {
    pathname: "/review/search",
    label: "공연후기 작성",
  },
  {
    pathname: "/my-review",
    label: "내가 쓴 후기",
  },
];

const userId = 2 as number;
export const myPageLinkInfo = [
  {
    pathname: `/mypage/${userId}`,
    label: "마이페이지",
  },
  {
    pathname: `/mypage/${userId}/posts`,
    label: "내가 쓴 글",
  },
  {
    pathname: `/mypage/${userId}/scraps`,
    label: "스크랩",
  },
];

export const writeLinkInfo = [
  {
    pathname: "/board/write",
    label: "게시글 쓰기",
  },
  {
    pathname: "/rent/write",
    label: "대여하기",
  },
  {
    pathname: "/sell/write",
    label: "거래하기",
  },
];

export const navigationInfo = {
  게시판: boardLinkInfo,
  마켓: marketLinkInfo,
  공연후기: reviewLinkInfo,
  마이페이지: myPageLinkInfo,
  글쓰기: writeLinkInfo,
};
