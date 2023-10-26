import React from "react";
import { BiSolidInfoCircle } from "react-icons/bi";

const WarningMessage = () => {
  return (
    <div className="">
      <div className="text-white bg-red-400 leading-4 px-5 py-5 rounded-lg">
        <div className="flex justify-start items-center gap-2 py-2">
          <BiSolidInfoCircle size={20} />
          <div className="font-semibold text-lg tracking-tighter">중요 면책조항</div>
        </div>

        <div className="text-base leading-5">
          당사의 웹사이트, 참조사이트, 관련 응용 프로그램, 포럼, 블로그, 소셜미디어 계정 및 기타 플랫폼(“사이트“)에
          제공되는 정보는 타사 소스로부터 입수되었으며 귀하에게 일반적인 정보제공을 목적으로만 제공됩니다. 당사는 당사의
          콘텐츠에 어떠한 것도 보증하지 않습니다. (정확성 및 최신성을 포함하되 이에 국한되지 않음) 당사가 제공한
          콘텐츠의 어떠한 부분도 귀하가 어떤 목적으로든 특정하게 의존할 수 있는 재무적 조언, 법적조언 또는 기타 모든
          형태의 조언을 구성하지 않습니다. 당사의 콘텐츠에 대한 모든 사용 또는 의존은 귀하 자신의 판단에 의한 것이며,
          귀하는 당사의 콘텐츠에 의존하기 전에 스스로 조사,검토,분석,검증을 수행해야 합니다. 거래는 큰 솔실이 발생할 수
          있는 위험한 활동입니다. 따라서 결정을 내리기 전에 본인의 재무 관리자와 상의 하세요. 당사 사이트의 모든
          콘첸츠는 권유 또는 제안을 위한 것이 아닙니다.
        </div>
      </div>
    </div>
  );
};

export default WarningMessage;
