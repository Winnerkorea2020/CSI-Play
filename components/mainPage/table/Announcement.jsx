import MainTitle from "@/components/title/MainTitle";
import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";

const Announcement = () => {
  const title = "공지사항";
  const linkUrl = "/";
  return (
    <div className="card h-full">
      <MainTitle title={title} url={linkUrl} />

      <div className="main__board--card overflow-auto">
        <div className="w-full overscroll-auto ">
          <div className="main__table">
            <div className="main__table--thread">
              <div className="main__table--thread--cell">Tag</div>
              <div className="main__table--thread--cell">제목</div>
              <div className="main__table--thread--cell">추천</div>
              <div className="main__table--thread--cell">조회수</div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
            <div className="main__table--tbody">
              <div className="main__table--tbody--cell  w-20">공지</div>
              <div className="main__table--tbody--cell text-left ">
                Consultant says he was told to ‘draw a line under’ his
                suspicions Consultant says he was told to ‘draw a line under’
                his suspicions his suspicions his suspicions his suspicions
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                582
              </div>
              <div className="main__table--tbody--cell text-center w-16">
                31518486
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
