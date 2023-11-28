"use client";
import JoinStep from "@/components/signInSignUp/JoinStep";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const JoinPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="h-full ">
      <div className="px-5 my-5">
        {/* Step */}
        <JoinStep activiy1={false} activiy2={false} />
        {/* Form */}
        <div className="">
          <legend className="sr-only">Checkbox variants</legend>
          <div className="flex  items-start xl:items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              이용약관, 개인정보 수집 및 이용, 마케팅 및 프로모션, 맞춤형 서비스
              제공위한 정보 수신(SMS/이메일)에 모두 동의 합니다.
            </label>
          </div>

          <div className="flex  items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              14세 이상(필수)
            </label>
          </div>
          <div className="flex  items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              이용약관 동의(필수)
            </label>
          </div>
          <div className="overscroll-none mb-4">
            <div className=" text-sm border px-5 py-6 h-72 overflow-y-auto ">
              프라임 플레이(이하 “회사”라 합니다)는 『약관의 규제에 관한 법률』
              상 의무를 이행하기 위하여 별도로 회원에게 고지합니다.
              웹사이트(https://www.csi-play.com/, 이하 “웹사이트”) 및 웹사이트의
              관련 콘텐츠, 소프트웨어 및 어플리케이션 등 제반 온라인 서비스(이하
              "서비스") 이용과 관련하여 이용자의 권리·의무·책임사항과 기타
              필요한 사항을 규정함을 목적으로 합니다. 회원은 본 이용약관의 주요
              내용을 반드시 확인하고, 본 이용약관에 동의해야만 웹 사이트를
              이용할 수 있습니다.
              <br />
              서비스를 이용하기 위하여 회원이 회사에게 제공한 로그인 정보와
              일치하는 정보를 기입하여 웹사이트를 이용하는 경우, 해당 접속 기간
              중 이루어지는 모든 행위는 해당 회원의 진정한 의사에 의한 것으로
              간주됩니다. 그러므로 회원은 계정, 비밀번호 기타 정보에 대한 보안을
              각별히 유지하여야 하고, 범죄로 인한 피해를 주의하여야 합니다.
              <br />
              회원 또는 제3자의 불법행위 등으로 인하여 서비스가 일시 중단되거나
              서비스에 오류가 발생하는 등의 문제가 발생할 경우, 회사는 문제를
              해결하고 서비스를 재개합니다. 이 때, 회원은 회사에 대하여 회사가
              보유하고 있는 거래 기록에 근거하여 복구를 요청할 수 있으나, 회사는
              어떠한 경우에도 거래 기록 복구에 따른 차익을 보전하거나 다른
              종류의 통화 또는 기타 이와 유사한 수단으로 회원의 손해를 보상하지
              아니합니다.
              <br />
              회원의 불법행위로 인하여, 회사에게 손해가 발생할 경우, 회사는
              회원에게 법률상 손해배상청구권을 행사할 수 있습니다. 그러므로
              반드시 법령을 준수하여 회사의 서비스를 이용하여 주시기 바랍니다.
              <br />
              <br />
              제1조(목적)
              <br />
              프라임 플레이(이하 “회사”라 합니다)는 『약관의 규제에 관한 법률』
              상 의무를 이행하기 위하여 별도로 회원에게 고지합니다.
              웹사이트(https://www.csi-play.com/, 이하 “웹사이트”) 및 웹사이트의
              관련 콘텐츠, 소프트웨어 및 어플리케이션 등 제반 온라인 서비스(이하
              "서비스") 이용과 관련하여 이용자의 권리·의무·책임사항과 기타
              필요한 사항을 규정함을 목적으로 합니다.
              <br />
              <br />
              제2조(약관의 효력과 개정)
              <br />
              1. 웹사이트는 이용자가 본 약관의 내용에 동의하는 것을 조건으로
              이용자에게 서비스를 제공하며, 이용자가 본 약관의 내용에 동의하는
              경우, 웹사이트의 서비스 제공 행위 및 이용자의 서비스 사용 행위에는
              본 약관이 우선적으로 적용됩니다.
              <br />
              2. CSI PLAY는 필요한 경우 본 약관의 내용을 변경할 수 있으며,
              변경된 약관은 웹사이트 서비스 화면에 공지함으로써 이용자가 직접
              확인할 수 있도록 하겠습니다. 본 약관을 변경할 경우에는 적용일자 및
              변경사유를 명시하여 웹사이트 내에 그 적용일자 30일 전부터
              공지하겠습니다.
              <br />
              3. 회원은 개정된 약관에 동의하지 않을 경우 회원 탈퇴할 수 있으며,
              명시적으로 거부의 의사표시를 하지 아니하고 웹사이트를 계속
              사용하는 경우에는 약관 변경에 동의한 것으로 간주됩니다.
              <br />
              4. 본 약관은 CSI PLAY와 이용자 사이에 성립되는 서비스 이용계약의
              기본약정이며, CSI PLAY는 필요한 경우 특정 서비스에 관하여 적용될
              사항(이하 “개별약관”)을 정하여 미리 공지할 수 있습니다. 이용자가
              이러한 개별약관에 동의하고 특정 서비스를 이용하는 경우에는
              개별약관이 우선적으로 적용되고, 본 약관은 보충적인 효력을
              갖습니다.
              <br />
              5. 이용자는 약관의 변경에 대하여 주의의무를 다하여야 하며, 변경된
              약관의 부지로 인한 이용자의 피해는 CSI PLAY가 책임지지 않습니다.
              <br />
              6. 본 약관에 명시되지 않은 사항에 대해서는 대한민국의
              「전기통신사업법」, 「정보통신망 이용촉진 및 정보보호 등에 관한
              법률」, 「개인정보 보호법」 등 관련 법령(이하 별도의 표기가 없는
              경우 대한민국법을 의미합니다)의 규정에 따릅니다.
              <br />
              <br />
              <br />
              제3조(서비스의 제공 및 변경)
              <br />
              1. 다음과 같은 서비스를 제공할 수 있습니다.
              <br />
              (1) 블록체인 기술 및 토큰의 시세정보 검색 서비스
              <br />
              (2) 주식 및 부동산 뉴스
              <br />
              (3) 게시판 서비스
              <br />
              (4) 기타 회사가 정하는 서비스
              <br />
              <br />
              2. 서비스의 종류에 따라 각 서비스의 특성, 절차 및 방법에 대한
              사항을 서비스 화면을 통하여 공지하며, 회원은 회사가 공지한 각
              서비스에 관한 사항을 이해하고 서비스를 이용하여야 합니다.
              <br />
              3. 회사는 회원이 게시한 메세지를 회사가 제공하는 제휴사에 노출할
              수 있으며, 이와 관련된 프로모션 등에도 노출할 수 있습니다. 해당
              노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집할 수
              있습니다.
              <br />
              4. 제휴사란 회사와 운영과 관련하여 제휴 계약을 체결하고 서비스를
              공동으로 제공하기로 합의한 회사로서 회원정보를 양사간 공유할 수
              있습니다. 제휴사는 'OTC PLAY'이며 회사 및 제휴사의 사정에 따라
              해지 또는 추가될 수 있습니다.
              <br />
              <br />
              제4조(회원 가입 및 등록사항의 변경 등)
              <br />
              <br />
              1. 웹사이트 회원 가입을 하고자 하는 이용자는 웹사이트의 회원 가입
              신청 절차에 따라 이름, 전화번호, 이메일 등 개인정보를 기재하고 본
              약관 및 개인정보처리방침에 동의 여부를 표시한 뒤 회원 가입 신청을
              하고, CSI PLAY가 이를 승낙함으로써 회원으로 가입합니다. CSI PLAY는
              회원 가입 승낙의 의사를 해당 서비스 화면에 게시하거나, 이메일 또는
              기타 방법으로 신청인에게 통지합니다.
              <br />
              2. 미성년자가 회원 가입을 하고자 할 경우 법정대리인의 동의를 받은
              후 가입하여야 합니다.
              <br />
              3. 회원 가입 신청양식에 기재하는 회원정보는 가입 신청인의
              실제정보인 것으로 간주되고, 실제정보를 입력하지 않은 회원은 법적인
              보호를 받을 수 없으며 서비스 이용에 제한을 받을 수 있습니다.
              <br />
              <br />
              제5조(회원 탈퇴 및 자격 상실)
              <br />
              <br />
              1. 회원은 언제든지 회원 탈퇴를 할 수 있으나, 회원은 탈퇴 전에 모든
              진행 중인 거래절차를 완료, 철회, 취소하여 이를 종료하여야만
              합니다. 만약 회원이 진행 중인 거래절차가 적절하게 종료되지
              아니하면 회원 탈퇴를 할 수 없습니다.
              <br />
              2. 회원이 탈퇴하는 경우 CSI PLAY는 지체없이 회원 탈퇴를 처리하고,
              해당 회원의 개인정보를 파기합니다.
              <br />
              3. CSI PLAY가 아래와 같은 경우에는 이용자의 웹사이트 회원 자격을
              상실시키기로 결정하고 회원 등록을 말소합니다. 이 경우 회원 등록
              말소 전에 회원에게 이를 통지하고, 소명할 기회를 부여합니다.
              <br />
              (1) 회원의 거주지에서 효력이 있는 대한민국 외의 법률에 따라 본
              서비스 이용행위가 해당 법률의 위반을 구성하거나 구성할 현저한
              위험이 있는 경우
              <br />
              (2) 회원이 다른 사람의 개인정보를 이용하여 서비스를 이용하려 하는
              경우
              <br />
              (3) 회원이 서비스 이용 과정에서 필요한 정보를 입력하지 아니하거나
              허위의 정보를 입력하는 경우
              <br />
              (4) 기타 회원의 서비스 이용이 관련 법령에 위반되는 경우
              <br />
              <br />
              <br />
              제6조(서비스 이용방법 및 주의사항)
              <br />
              1. 회사는 회원에게 제공하는 서비스 중 서비스의 성격에 따라 관련
              법령 또는 기술적인 필요가 있는 경우 개별 이용약관 등의 동의를
              요청할 수 있습니다. 이 경우 회원은 자신이 동의한 이용약관에 따른
              개별 서비스를 이용할 수 있습니다.
              <br />
              2. 회사는 서비스 품질 향상을 위하여 회원에게 서비스 이용과 관련된
              각종 고지, 관리 메시지 및 기타 광고를 비롯한 다양한 정보를
              서비스에 표시하거나 회원의 전자우편 등으로 직접 발송할 수
              있습니다.
              <br />
              3. 회사는 서비스 이용 중 개별 프로그램을 포함하여 시스템 오류가
              발생하는 경우, 회사는 해당 오류로 인하여 발생한 잘못된 정보 등을
              삭제하고 실제의 정보를 복원 또는 표시할 수 있고, 경우에 따라서
              해당 오류가 발생하기 직전의 특정 시각 거래정보로 초기화 될 수
              있습니다. 이 때, 시스템 오류 발생 인지 시점에 표시된 잘못된 정보가
              변경될 경우, 이는 오류가 수정 또는 삭제되어 실제 정보가 표시되는
              것이므로, 회원은 실제 정보에 따른 서비스에 근거하여 권리를
              행사하거나 의무를 부담할 수 있습니다.
              <br />
              4. 회원은 서비스를 자유롭게 이용할 수 있으나, 아래 각호의 범위
              내에서는 서비스 이용이 제한될 수 있습니다.
              <br />
              (1) 회원은 잘못된 방법으로 회사의 서비스 제공을 방해할 수 없고,
              회사가 안내하는 방법 이외의 다른 방법을 이용하여 서비스를 이용할
              수 없습니다.
              <br />
              (2) 다른 서비스 이용자의 정보를 무단으로 수집∙이용하는 행위,
              서비스를 회원의 사업 또는 영업 목적으로 이용하는 행위(단, 회사와
              별도의 계약을 체결한 경우에는 제외됩니다), 법령에 위반되는 내용의
              정보 등을 발송하거나 게시하는 행위, 범죄 행위, 계정 정보 대여 또는
              양도, 담보제공 행위는 금지됩니다.
              <br />
              (3) 회원은 회원 가입, 웹사이트 등에서 서비스 신청 또는 변경 시
              허위의 내용을 등록하여서는 아니되며, 동일한 회원이 두 개 이상의
              계정으로 중복하여 회원 가입을 하는 행위와 본인의 계정 정보를
              제3자에게 양도, 담보 목적으로 제공, 대여, 사용을 위임하는 행위는
              금지됩니다.
              <br />
              (4) 회사의 동의 없이 서비스 또는 이에 포함된 소프트웨어의 일부를
              복사∙수정∙배포∙판매∙양도∙대여∙담보제공하거나 타인에게 그 이용을
              허락하는 행위와, 소프트웨어를 역설계하거나 소스코드의 추출을
              시도하는 등 서비스를 복제∙분해 또는 모방하거나 기타 변형하는 행위
              및 회사의 서비스를 통하여 얻은 정보로 직거래를 유도하는 행위도
              금지됩니다.
              <br />
              <br />
              5. 회원은 서비스의 이용권한, 서비스 이용에 따른 회사와의
              채권∙채무, 기타 계약상 지위를 타인에게 대여∙양도∙증여하거나 담보로
              제공할 수 없고, 이로 인한 불이익이 발생하는 경우 회사는 어떠한
              책임도 부담하지 않습니다.
              <br />
              6. 회원이 관련 법령, 회사의 모든 약관 또는 정책을 준수하지
              않는다면, 회사는 회원의 위반행위 등을 조사하거나 회원의 서비스
              이용을 잠시 또는 계속하여 중단할 수 있고, 회원의 서비스 재가입에
              제한을 둘 수 있습니다.
              <br />
              7. 회사는 법령에서 정하는 기간 동안 회원이 서비스를 이용하기
              위하여 로그인 혹은 접속한 기록이 없는 경우 회원이 등록한 전자우편,
              SMS 등 기타 유효한 수단으로 통지 후 회원의 정보를 파기하거나 분리
              보관할 수 있고, 이로 인하여 서비스 이용을 위한 필수적인 정보가
              부족할 경우 이용계약이 해지될 수 있습니다. 또한, 회원이 서비스에
              일정 기간 이상 로그인하지 않을 경우 회사는 회원의 서비스 이용에
              필요한 추가 정보를 요구할 수 있고, 특히 12개월 이상 로그인하지
              아니할 경우 회사는 계정 정지 절차에 착수할 수 있습니다.
              <br />
              8. 회원은 미합중국 또는 회사의 판매 중개 서비스 이용이 현지 법률에
              위반되거나 위반될 염려가 있는 장소에서 거주하고 있는 경우, 자신의
              판매 중개 서비스 이용에 따른 불이익이 발생할 수 있음을 확인하여야
              합니다. 특히, 회사가 회원이 거주하고 있는 장소를 확인한 결과
              회원의 판매 중개 서비스 이용이 현지 법률의 위반을 구성하거나
              구성할 염려가 있는 경우(회원의 판매 중개 서비스 이용에 대한
              관계당국의 조사가 개시되는 경우 등), 회사는 즉시 계정 정지 절차에
              착수할 수 있습니다.
              <br />
              9. 회원은 전자금융사기로 인하여 피해가 발생하지 않도록 스스로
              주의를 기울여야 하고, 만일 전자금융사기로 인하여 수사기관, 행정청
              기타 공권력의 조사가 이루어져 해당 계정의 동결이 필요할 경우에는
              회사는 회원의 동의 없이 해당 계정을 동결함과 동시에 계정 정지
              절차에 착수할 수 있습니다.
              <br />
              10. 제7항부터 제9항의 경우, 회사는 계정 정지 절차에 착수한 후
              지체없이 회원이 등록한 전자우편, SMS 등 기타 유효한 수단으로
              통지합니다.
              <br />
              <br />
              제7조(서비스의 중단)
              <br />
              1. 웹사이트는 정보시스템, 서버, 정보기기, 네트워크의 점검·교체 및
              장애발생 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로
              중단할 수 있습니다. 또한, 운영상 상당한 이유가 있는 경우 현재
              제공되는 서비스를 새로운 서비스로 교체 또는 중단할 수 있습니다.
              <br />
              2. 제1항에 의한 서비스 중단의 경우에는 CSI PLAY는 이용자에게
              회원이 등록한 전자우편, SMS 등 기타 유효한 수단으로통지합니다.
              다만, CSI PLAY는 통제할 수 없는 사유로 인한 서비스의 중단(시스템
              관리자의 고의·과실이 없는 정보시스템, 서버, 정보기기, 네트워크의
              장애발생 등)으로 인하여 사전 통지가 불가능한 경우에는 그러하지
              아니합니다.
              <br />
              <br />
              제8조(이용자에 대한 통지)
              <br />
              1. CSI PLAY가 특정 회원에 대한 통지를 하는 경우 회원이 회원 가입
              시에 기재한 메일주소, 전화번호 기타 CSI PLAY와 미리 약정하여
              지정한 방법으로 할 수 있습니다.
              <br />
              2. CSI PLAY가 불특정다수 이용자에 대한 통지를 하는 경우 웹사이트
              게시판 및 서비스 화면에 게시함으로써 개별 통지에 갈음할 수
              있습니다.
              <br />
              <br />
              제9조(개인정보보호)
              <br />
              1. CSI PLAY는 「개인정보 보호법」등 관련 법령, CSI PLAY 개인정보
              보호에 관한 규정 및 CSI PLAY의 개인정보처리방침이 정하는 바에 따라
              이용자의 개인정보를 보호하기 위하여 노력합니다. 다만, 웹사이트에
              포함된 링크 또는 배너를 클릭하여 다른 사이트로 옮겨갈 경우에는
              해당 사이트의 개인정보보호방침에 따릅니다.
              <br />
              2. 웹사이트는 회원 정보를 다음과 같이 처리합니다.
              <br />
              (1) 개인정보의 수집 및 이용 : 웹사이트는 회원가입 시, 수집목적
              또는 이용목적을 밝혀 회원으로부터 필요한 정보를 수집할 수
              있습니다. 이 경우 최소한의 개인정보를 수집합니다. 또한,
              민감정보·고유식별정보의 수집이 필요한 경우에는 각각을 구분하여
              별도의 동의를 받아 처리합니다.
              <br />
              (2) 개인정보의 목적 외 이용 및 제3자 제공 : 웹사이트는 수집된
              회원의 개인정보를 제2항제1호의 목적 범위 내에서 이용하며, 이용자
              본인의 동의 없이 본래의 목적을 초과하여 처리하거나 제3자에게
              제공하지 않습니다.
              <br />
              3. 회원은 개인정보 관리화면을 통하여 언제든지 본인의 개인정보를
              열람·수정·삭제할 수 있습니다.
              <br />
              4. 회원은 회원 가입 신청 시 기재한 사항에 변경이 발생한 경우,
              변경사항을 수정하여 기재하여야 합니다. 회원이 변경사항을 수정
              기재하지 않아 발생한 불이익에 대하여 CSI PLAY는 책임지지 않습니다.
              <br />
              <br />
              제10조(CSI PLAY의 의무)
              <br />
              1. CSI PLAY는 관련 법령과 본 약관이 정하는 바에 따라 지속적이고,
              안정적으로 서비스를 제공하기 위해서 노력합니다.
              <br />
              2. CSI PLAY는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록
              개인정보의 안전성 확보에 필요한 기술적·관리적 및 물리적 보안
              조치를 취합니다.
              <br />
              <br />
              제11조(회원의 ID 및 비밀번호에 대한 의무)
              <br />
              1. 회원의 아이디와 비밀번호에 관한 관리책임은 회원에게 있습니다.
              다만, CSI PLAY가 개인정보보호법 등 관계 법령에 의하여 책임을 지는
              경우는 제외합니다.
              <br />
              2. 회원은 자신의 아이디 및 비밀번호를 제3자에게 이용하게 해서는 안
              되며, 작업 종료 시에는 반드시 로그아웃하고, 웹 브라우저의 창을
              닫아야 합니다.
              <br />
              3. 회원은 자신의 아이디 및 비밀번호가 도용되거나 제3자가 사용하고
              있음을 인지한 경우에는 즉시 CSI PLAY에 통지하고 CSI PLAY의 안내가
              있는 경우에는 그에 따라야 합니다.
              <br />
              <br />
              제12조(이용자의 의무)
              <br />
              1. 이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
              <br />
              (1) 회원 가입 신청 또는 개인정보 변경 시 허위 내용을 등록하는 행위
              <br />
              (2) 타인의 명의를 도용하여 부정 사용(판매, 위탁판매 등을
              포함한다)하는 행위
              <br />
              (3) CSI PLAY의 직원이나 서비스의 관리자를 가장하거나 사칭하는 행위
              <br />
              (4) 웹사이트에 게시된 정보를 변경하는 행위
              <br />
              (5) 다른 이용자에 대한 개인정보를 수집·저장·공개하는 행위
              <br />
              (6) 외설 또는 폭력적·위협적인 메시지·화상·음성·기타 공서양속에
              반하는 정보를 메일로 송신하거나 공개 또는 게시하는 행위
              <br />
              (7) 사생활 침해 또는 명예훼손 등 타인의 권리를 침해하는 정보를
              유통시키는 행위
              <br />
              (8) 타인의 지적재산권을 침해하거나 업무를 방해하는 행위
              <br />
              (9) 컴퓨터 소프트웨어·하드웨어·네트워크 등의 정상적인 가동을 방해,
              파괴할 목적으로 고안된 소프트웨어 바이러스·기타 다른 컴퓨터
              코드·파일·프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로
              발송하는 행위
              <br />
              (10) 불특정 다수를 대상으로 하여 광고 또는 선전을 게시하거나
              스팸메일을 전송하는 등의 행위
              <br />
              (11) 웹사이트의 이용 약관을 위반하는 행위
              <br />
              (12) 기타 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보를
              전송 또는 게시하는 행위
              <br />
              2. 제1항에 해당하는 행위를 한 이용자가 있을 경우 CSI PLAY는
              이용자의 회원자격을 적정한 방법으로 제한, 정지 또는 상실시킬 수
              있습니다.
              <br />
              3. 이용자는 그 귀책사유로 인하여 CSI PLAY이나 다른 이용자가 입은
              손해를 배상할 책임이 있습니다.
              <br />
              <br />
              제13조(공개 게시물의 삭제 등)
              <br />
              1. 이용자가 게재한 공개 게시물의 내용이 다음 각 호에 해당하는 경우
              웹사이트는 이용자에게 사전 통지 없이 해당 공개 게시물을 삭제할 수
              있고, 해당 이용자의 회원 자격을 제한, 정지 또는 상실시킬 수
              있습니다.
              <br />
              (1) 욕설이나 음란한 부호·문언·음향·화상 또는 영상을
              배포·판매·임대하거나 공공연하게 전시하는 내용
              <br />
              (2) 사람을 비방할 목적으로 공공연하게 사실이나 거짓의 사실을
              드러내어 타인의 명예를 훼손하는 내용
              <br />
              (3) 공포심이나 불안감을 유발하는 부호·문언·음향·화상 또는 영상을
              반복적으로 상대방에게 도달하도록 하는 내용
              <br />
              (4) 정당한 사유 없이 정보통신시스템, 데이터 또는 프로그램 등을
              훼손·멸실·변경·위조하거나 그 운용을 방해하는 내용
              <br />
              (5) 「청소년 보호법」에 따른 청소년유해매체물을 게재 또는 광고하는
              내용
              <br />
              (6) 법령에 따라 금지되는 사행행위에 해당하는 내용
              <br />
              (7) 그 밖에 범죄를 목적으로 하거나 교사 또는 방조하는 내용
              <br />
              (8) 기타 관련 법령에 위배된다고 판단되는 내용
              <br />
              <br />
              2. 공개게시물의 내용으로 인하여 사생활 침해나 명예훼손 등 타인의
              권리가 침해된 경우 그 침해를 받은 자는 CSI PLAY에게 침해사실을
              소명하여 그 정보의 삭제를 요청할 수 있습니다.
              <br />
              3. CSI PLAY는 제2항에 따른 정보의 삭제요청에도 불구하고, 권리의
              침해 여부를 판단하기 어렵거나 이해당사자 간에 다툼이 예상되는
              경우에는 해당 정보에 대한 접근을 임시적으로 차단하는 조치(이하
              "임시조치"라 한다)를 할 수 있습니다. 이 경우 임시조치의 기간은
              30일 이내로 합니다.
              <br />
              4. CSI PLAY는 제2항에 따른 요청을 받으면 지체 없이 삭제·임시조치
              등의 필요한 조치를 하고, 즉시 신청인 및 정보 게시자에게 알리는
              한편, 필요한 조치를 취한 사실을 해당 게시판에 공시하는 등의
              방법으로 이용자가 알 수 있도록 합니다.
              <br />
              <br />
              제14조 (광고게재)
              <br />
              1. 회원은 회원이 등록한 게시물의 내용을 활용한 광고게재 및 기타
              서비스상에 노출되는 광고게재에 대해 동의합니다.
              <br />
              2. 회사는 서비스상에 게재되어 있거나 서비스를 통한 광고주의
              판촉활동에 회원이 참여하거나 교신 또는 거래를 함으로써 발생하는
              손실과 손해에 대해 책임을 지지 않습니다.
              <br />
              <br />
              제15조 (저작권의 귀속 및 이용제한)
              <br />
              1. 회사가 작성한 저작물에 대한 저작권 기타 지식재산권은 회사에
              귀속합니다.
              <br />
              2. 회원은 웹사이트 등을 이용함으로써 얻은 정보 중 회사에게
              지적재산권이 귀속된 정보를 회사의 사전 승낙 없이 복제, 송신, 출판,
              배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게
              이용하게 하여서는 안됩니다.
              <br />
              3. 회원이 서비스 내에 게시한 게시물의 저작권은 회사에 귀속됩니다.
              회사는 서비스의 운영, 전시, 전송, 배포, 홍보의 목적으로 회원의
              별도의 허락 없이 무상으로 저작권법에 규정하는 공정한 관행에
              합치되게 합리적인 범위 내에서 다음과 같이 회원이 등록한 게시물을
              사용할 수 있습니다.
              <br />
              (1) 서비스 내에서 회원 게시물의 복제, 수정, 개조, 전시, 전송, 배포
              및 저작물성을 해치지 않는 범위 내에서의 편집 저작물 작성
              <br />
              (2) 미디어, 통신사 등 서비스 제휴 파트너에게 회원의 게시물 내용을
              제공, 전시 혹은 홍보하게 하는 것. 단, 이 경우 회사는 별도의 동의
              없이 회원의 ID 및 관련 IP 외에 회원의 개인정보를 제공하지
              않습니다.
              <br />
              4. 회사는 전항 이외의 방법으로 회원의 게시물을 이용하고자 하는
              경우, 쪽지, 댓글, 전자우편 등의 방법을 통해 사전에 회원의 동의를
              얻어야 합니다.
              <br />
              <br />
              제16조(이용계약의 해지)
              <br />
              1. 회원이 서비스의 이용을 원하지 아니하거나 이 약관에 동의하지
              아니하는 경우, 회원은 언제든지 서비스 내 제공되는 메뉴 또는
              고객센터를 이용하여 서비스 이용계약의 해지를 신청할 수 있고,
              회사는 법령이 정하는 바에 따라 이를 처리하여 회원을 탈퇴
              처리합니다. 단, 회사는 회원의 신청에 따른 서비스 이용계약 해지를
              처리하는 과정에서 회원에게 발생하는 손해에 대하여 책임을 부담하지
              아니합니다. 또한 이 약관에 따라 이용계약이 해지된 경우 회사는
              회원에게 부가적으로 제공한 각종 혜택을 무효화하거나 회수할 수
              있습니다.
              <br />
              2. 회원이 이 약관상 의무 또는 서비스 개별약관에서 정한 의무를
              포함하여 총 2회 이상 의무를 위반하거나 회사가 제공하는 서비스의
              전부 또는 일부의 중단 또는 이용 제한의 조치가 이루어졌음에도
              불구하고 그 중단 또는 이용 제한의 해제조건이 성취되지 아니하는
              경우, 회사는 계정 정지 절차에 착수하거나 사전에 이용계약 해지
              예정임을 통지하고 이용계약을 해지할 수 있습니다.
              <br />
              3. 이용계약이 해지되는 경우, 회사는 법령 및 개인정보처리방침에
              따라 회원의 정보를 보유하는 경우를 제외하고 회원의 정보를
              삭제합니다. 이 경우 회원은 회사가 보유하고 있는 회원 정보의 제공을
              요청할 수 없습니다.
              <br />
              4. 이용계약을 해지하는 경우, 회원은 제17조에서 규정한 방법 이외의
              방법으로 환불을 요청할 수 없습니다. 다만, 서비스 개별약관에 본
              약관과 다른 계약해지 방법 및 효과를 규정하고 있는 경우 각
              개별약관의 규정에 따릅니다.
              <br />
              5. 이용계약이 해지된 경우라도 회원은 다시 회사에 대하여 이용계약의
              체결을 신청할 수 있습니다. 다만, 다시 이용계약을 체결함에 있어
              시간적 제한 및 본 약관 상의 제한 등이 따를 수 있습니다.
              <br />
              <br />
              제17조(손해배상)
              <br />
              CSI PLAY는 제공되는 서비스와 관련하여 이용자에게 어떠한 손해가
              발생하더라도 동 손해가 CSI PLAY의 중대한 과실에 의한 경우를
              제외하고는 이에 대하여 책임을 부담하지 않습니다.
              <br />
              <br />
              제18조(면책조항)
              <br />
              1. CSI PLAY는 천재지변 또는 이에 준하는 불가항력으로 인하여
              서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
              면제됩니다.
              <br />
              2. CSI PLAY는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여
              책임을 지지 않습니다.
              <br />
              3. CSI PLAY는 이용자가 서비스를 이용하여 기대하는 이익이나
              서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지
              않습니다.
              <br />
              4. CSI PLAY는 이용자가 서비스에 게재한 정보, 자료, 사실의 신뢰도,
              정확성 등의 내용에 관하여는 책임을 지지 않습니다.
              <br />
              5. CSI PLAY는 이용자의 위조나 변조, 해킹 시도 등으로 발생한 사고로
              인해 발생한 사고에 대해서 책임지지 않습니다.
              <br />
              6. CSI PLAY는 회사에 링크된 사이트가 취급하는 상품 또는 용역에
              대하여 보증책임을 지지 아니합니다. 회사와 회사에 연결된 사이트는
              독자적으로 운영되며 회사는 회사 연결사이트와 회원 간에 행해진
              거래에 대하여 어떠한 책임도 지지 아니합니다.
              <br />
              <br />
              제19조(분쟁 해결)
              <br />본 약관 또는 서비스는 대한민국 법령에 의하여 규정되고
              이행되고, 회원의 주거지와 관계없이 분쟁의 해결에 따른 준거법은
              대한민국 법령으로 합니다. 다만, 대한민국 내에서 가상화폐 등에 관한
              법령 또는 대법원 판결이 없는 경우, 대한민국 외에서의 선례 또는
              유력한 견해가 본 약관 또는 서비스의 분쟁에 관한 준거법령의 효력을
              가질 수 있습니다. 서비스 이용과 관련하여 회사와 회원 간의 분쟁이
              발생하면 당사자 사이의 해결을 위하여 노력하되, 그럼에도 불구하고
              해결되지 아니하면 대한민국의 민사소송법에 따른 관할 법원에 소를
              제기할 수 있고, 대한민국 외의 법원 또는 사법기관, 중재기관 기타
              이에 준하는 기관에 대한 소 제기는 허용되지 아니하며, 회원 또한
              이에 동의하여야 합니다.
              <br />
              <br />부 칙
              <br />
              1. 본 약관은 2023년 07월 01일부터 적용됩니다.
            </div>
          </div>
          <div className="flex  items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              개인정보 수집 및 이용에 대한 동의(필수)
            </label>
          </div>
          <div className="overscroll-none mb-4">
            <div className=" text-sm border px-5 py-6 h-72 overflow-y-auto ">
              프라임 플레이는 (이하 "회사"는) 고객님의 개인정보를 중요시하며,
              "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
              <br />
              회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가
              어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
              조치가 취해지고 있는지 알려드립니다.
              <br />
              <br />
              1. 수집하는 개인정보 항목 및 수집방법
              <br />
              가. 수집하는 개인정보의 항목
              <br />
              (1) 회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은
              개인정보를 수집하고 있습니다.
              <br />- 회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호
              , 자택 전화번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우
              법정대리인의 정보
              <br />- 서비스 신청시 : 주소, 결제 정보
              <br />
              <br />
              (2) 서비스 이용 과정이나 사업 처리 과정에서 서비스이용기록,
              접속로그, 쿠키, 접속 IP, 결제 기록, 불량이용 기록이 생성되어
              수집될 수 있습니다.
              <br />
              <br />
              나. 수집방법
              <br />- 홈페이지, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청,
              전화, 팩스, 생성 정보 수집 툴을 통한 수집
              <br />
              <br />
              2. 개인정보의 수집 및 이용목적
              <br />
              회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
              <br />
              (1) 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산
              <br />
              콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 ,
              금융거래 본인 인증 및 금융 서비스
              <br />
              (2) 회원 관리
              <br />
              회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정
              이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세
              미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등
              민원처리 , 고지사항 전달
              <br />
              (3) 마케팅 및 광고에 활용
              <br />
              이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스
              이용에 대한 통계
              <br />
              <br />
              3. 개인정보의 보유 및 이용기간
              <br />
              원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
              지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로
              명시한 기간 동안 보존합니다.
              <br />
              <br />
              가. 회사 내부방침에 의한 정보보유 사유
              <br />
              회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지,
              분쟁해결 및 수사기관의 요청에 따른 협조를 위하여, 이용계약
              해지일로부터 3년간 회원의 정보를 보유할 수 있습니다.
              <br />
              <br />
              나. 관련 법령에 의한 정보 보유 사유
              <br />
              전자상거래등에서의소비자보호에관한법률 등 관계법령의 규정에 의하여
              보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한
              일정한 기간 동안 회원정보를 보관합니다.
              <br />
              (1) 계약 또는 청약철회 등에 관한 기록
              <br />- 보존이유 : 전자상거래등에서의소비자보호에관한법률
              <br />- 보존기간 : 5년
              <br />
              (2) 대금 결제 및 재화 등의 공급에 관한 기록
              <br />- 보존이유: 전자상거래등에서의소비자보호에관한법률
              <br />- 보존기간 : 5년
              <br />
              (3) 소비자 불만 또는 분쟁처리에 관한 기록
              <br />- 보존이유 : 전자상거래등에서의소비자보호에관한법률
              <br />- 보존기간 : 3년
              <br />
              (4) 로그 기록
              <br />- 보존이유: 통신비밀보호법
              <br />- 보존기간 : 3개월
              <br />
              <br />
              4. 개인정보의 파기절차 및 방법
              <br />
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
              정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
              <br />
              (1) 파기절차
              <br />
              회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후
              별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타
              관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정
              기간 저장된 후 파기되어집니다.
              <br />
              별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는
              보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
              <br />
              (2) 파기방법
              <br />
              전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법을 사용하여 삭제합니다.
              <br />
              <br />
              5. 개인정보 제공
              <br />
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 아래의 경우에는 예외로 합니다.
              <br />
              (1) 이용자들이 사전에 동의한 경우
              <br />
              (2) 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와
              방법에 따라 수사기관의 요구가 있는 경우
              <br />
              <br />
              6. 이용자 및 법정대리인의 권리와 그 행사방법
              <br />
              (1) 이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나
              수정할 수 있으며 가입해지를 요청할 수도 있습니다.
              <br />
              (2) 이용자들의 개인정보 조회,수정을 위해서는 "개인정보변경"(또는
              "회원정보수정" 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를
              클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가
              가능합니다.
              <br />
              (3) 혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로
              연락하시면 지체없이 조치하겠습니다.
              <br />
              (4) 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
              완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한
              잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
              제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.
              <br />
              (5) 회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는
              "회사가 수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라
              처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
              있습니다.
              <br />
              <br />
              7. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
              <br />
              회사는 귀하의 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을
              운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의
              브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터
              하드디스크에 저장됩니다.
              <br />
              다음과 같은 목적을 위해 쿠키를 사용합니다.
              <br />
              (1) 쿠키 등 사용 목적
              <br />- 회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의
              취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문
              회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
              <br />- 귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
              귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나,
              쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을
              거부할 수도 있습니다.
              <br />
              (2) 쿠키 설정 거부 방법
              <br />- 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹
              브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를
              저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
              있습니다.
              <br />- 설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의
              도구 &gt; 인터넷 옵션 &gt; 개인정보
              <br />- 단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에
              어려움이 있을 수 있습니다.
              <br />
              <br />
              8. 개인정보에 관한 민원서비스
              <br />
              회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기 위하여 아래와 같이 관련 부서 및 개인정보보호책임자를
              지정하고 있습니다.
              <br />
              (1) 개인정보보호담당자
              <br />- 성명 : 프라임 플레이 대표
              <br />
              <br />
              (2) 개인정보보호책임자
              <br />- 성명 : 프라임 플레이 대표
              <br />
              <br />- 귀하께서는 회사의 서비스를 이용하시며 발생하는 모든
              개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로
              신고하실 수 있습니다.
              <br />- 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을
              드릴 것입니다.
              <br />- 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는
              아래 기관에 문의하시기 바랍니다.
              <br />
              개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)
              <br />
              개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)
              <br />
              대검찰청 사이버수사과 (spo.go.kr / 지역번호+1301)
              <br />
              경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)
            </div>
          </div>
          <div className="flex  items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              마케팅 및 프로모션 맟춤형 서비스 제공 위한 정보 수신 동의
            </label>
          </div>
          <div className="overscroll-none mb-4">
            <div className=" text-sm border px-5 py-6 h-72 overflow-y-auto ">
              {" "}
              CSI PLAY는 개인정보 보호법 제22조 제4항과 제39조의 3에 따라
              사용자의 광고성 정보 수신과 이에 따른 개인정보 처리에 대한 동의를
              받고 있습니다. <br />
              약관에 동의하지 않으셔도 CSI PLAY의 모든 서비스를 이용하실 수
              있습니다. 다만 이벤트, 혜택 등의 제한이 있을 수 있습니다.
              <br />
              <br />
              1. 개인정보 수집 항목
              <br />
              - 이름, 휴대폰 번호, 이메일, 성별, 생년월일
              <br />
              <br />
              2. 개인정보 수집 이용 목적
              <br />
              - 이벤트 운영 및 광고성 정보 전송
              <br />
              - 서비스 관련 정보 전송
              <br />
              <br />
              3. 보유 및 이용 기간
              <br />
              - 동의 철회 시 또는 회원 탈퇴 시까지
              <br />
              <br />
              4. 동의 철회 방법
              <br />
              - 마이 페이지에서 변경 (혹은 고객센터로 문의)
              <br />
              <br />
              5. 전송 방법
              <br />
              - 핸드폰 문자메시지(SMS), Email 등<br />
              <br />
              6. 전송 내용
              <br />
              - 혜택 정보, 이벤트 정보, 상품 정보, 신규 서비스 안내 등의 광고성
              정보 제공
              <br />
            </div>
          </div>
          <div className="flex  items-center mb-4">
            <input
              defaultChecked
              id="checkbox-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
            <label
              htmlFor="checkbox-1"
              className="ml-2 text-sm font-medium text-gray-900 "
            >
              전체동의하기
            </label>
          </div>
        </div>
        {/* Button */}
        <div className="flex justify-between  items-center gap-3">
          <button className="btn btn-red w-full rounded-lg">취소</button>
          <button
            className="btn btn-blue w-full rounded-lg"
            onClick={() => router.push(`/join/accountinfo`)}
          >
            동의
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
