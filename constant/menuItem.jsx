export const menuItem = [
  {
    title: "코인",
    url: "/",
    submenu: [
      {
        title: "코인시세/김프",
        color: "yellow",
        url: "/coin/marketPriceCoinView",
      },
      {
        title: "코인뉴스",
        color: "blue",
        url: "/coin/coinNews",
      },
      {
        title: "공시&이벤트",
        color: "red",
        url: "/coin/coinEvent",
      },
      {
        title: "코인분석",
        color: "green",
        url: "/coin/coinAnalyze/coin",
        submenu: [
          {
            title: "코인분석",
            color: "yellow",
            url: "/coin/coinAnalyze/coin",
          },
          {
            title: "시황분석",
            color: "blue",
            url: "/coin/coinAnalyze/investReport",
          },
          {
            title: "차크분석",
            color: "red",
            url: "/coin/coinAnalyze/chart",
          },
          {
            title: "암호화페 투자리포트",
            color: "green",
            url: "/coin/coinAnalyze/market",
          },
        ],
      },
      {
        title: "자유게시판",
        color: "fuchsia",
        url: "/coin/coinFreeBoard",
      },
    ],
  },

  {
    title: "주식",
    url: "/",
    submenu: [
      {
        title: "국내/해외증시",
        color: "yellow",
        url: "/stock/stockView",
      },
      {
        title: "주식뉴스",
        color: "blue",
        url: "/stock/stockNews",
      },
      {
        title: "공시&일정",
        color: "red",
        url: "/stock/stockEvent/date",
        submenu: [
          {
            title: "공시일정",
            color: "yellow",
            url: "/stock/stockEvent/date",
          },
          {
            title: "증시캘린더",
            color: "blue",
            url: "/stock/stockEvent/calandar",
          },
        ],
      },
      {
        title: "분석",
        color: "green",
        url: "/stock/stockAnalyze",
      },
      {
        title: "자유게시판",
        color: "fuchsia",
        url: "/stock/stockFreeBoard",
      },
    ],
  },
  {
    title: "선물/마진",
    url: "/",
    submenu: [
      {
        title: "롱&숏비율",
        color: "yellow",
        url: "/furtures/furtureLongShortMargin",
      },
      {
        title: "청산비율",
        color: "blue",
        url: "/furtures/furtureLiquidation",
      },
      {
        title: "현물/선물 계산기",
        color: "red",
        url: "/furtures/furtureCalculator",
      },
      {
        title: "자유게시판",
        color: "green",
        url: "/furtures/furtureFreeBoard",
      },
    ],
  },
  {
    title: "부동산",
    url: "/",
    submenu: [
      {
        title: "부동산거래",
        color: "yellow",
        url: "/realEstate/realEstateTrading",
      },
      {
        title: "부동산뉴스",
        color: "blue",
        url: "/realEstate/realEstateNews",
      },
      {
        title: "청약정보",
        color: "green",
        url: "/realEstate/realEstateSubscription",
      },
      {
        title: "자유게시판",
        color: "red",
        url: "/realEstate/realEstateFreeBoard",
      },
    ],
  },
  {
    title: "뉴스",
    url: "/",
    submenu: [
      {
        title: "국내&해외뉴스",
        color: "yellow",
        url: "/news/worldNews",
      },
      {
        title: "트위터",
        color: "blue",
        url: "/news/twitter",
      },
    ],
  },
  {
    title: "커뮤니티",
    url: "/",
    submenu: [
      {
        title: "출석체크",
        color: "yellow",
        url: "/communicate/daycheck",
      },
      {
        title: "가입인사",
        color: "blue",
        url: "/communicate/welcome",
      },
      {
        title: "질문답변",
        color: "red",
        url: "/communicate/FQA",
      },
      {
        title: "유머/감동",
        color: "green",
        url: "/communicate/humor",
      },
      {
        title: "자유게시판",
        color: "fuchsia",
        url: "/communicate/communicateFreeBoard",
      },
    ],
  },
  {
    title: "마이페이지",
    url: "/",
    submenu: [
      {
        title: "개인정보",
        color: "yellow",
        url: "/mypage/information",
      },
      {
        title: "알림설정",
        color: "blue",
        url: "/mypage/alaram",
      },
      {
        title: "알림메세지",
        color: "green",
        url: "/mypage/message",
      },
      {
        title: "공지사항",
        color: "red",
        url: "/mypage/notice",
      },
    ],
  },
];
