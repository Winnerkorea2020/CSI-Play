import React from "react";

const ExchangeRate = () => {
  return (
    <div className="overscroll-none">
      <iframe
        height={250}
        width={500}
        frameborder="0"
        allowtransparency="true"
        marginwidth="0"
        marginheight="0"
        src="https://sslfxrates.investing.com/index_exchange.php?params&inner-border-color=%23CBCBCB&border-color=%23cbcbcb&bg1=%23F6F6F6&bg2=%23ffffff&inner-text-color=%23000000&currency-name-color=%23000000&header-text-color=%23FFFFFF&force_lang=18"
        align="center"
      ></iframe>
      <br />
    </div>
  );
};

export default ExchangeRate;
