import React from "react";

const Calandar = () => {
  const date = new Date();
  //   현재 월의 시작 요일
  const currentMonthStartDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  console.log(currentMonthStartDay);

  //   현재 월의 마지막 날짜
  const currentMonthLastDate = new Date(2023, 9, 0);

  console.log("현재월의 마지막 날짜", currentMonthLastDate);

  //   이전 월의 마지막 날짜
  const pervioutMonthEndDate = new Date(date.getFullYear(), date.getMonth(), 0);

  console.log(pervioutMonthEndDate);

  return <div>Calandar</div>;
};

export default Calandar;
