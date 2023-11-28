import Image from "next/image";
import { BiLinkAlt } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { SiNaver, SiInstagram, SiTwitter } from "react-icons/si";

const ShareModal = ({ isOpen, closeModal }) => {
  return (
    <div className="">
      <div className={`${isOpen === true ? "block" : "hidden"}`}>
        <div
          className="fixed bg-gray-800/60 top-0 left-0 w-full mx-auto  min-h-screen flex items-center justify-center"
          style={{ zIndex: "100000" }}
        >
          <div className="bg-white border shadow-lg w-full mx-4 p-4 rounded-xl md:w-96">
            <div className="flex justify-between items center border-b border-gray-200 py-3">
              <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-800">공유하기</p>
              </div>

              <button
                onClick={closeModal}
                className="text-xl font-medium  cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8"
              >
                x
              </button>
            </div>

            <div className="my-4">
              <div className="flex justify-around my-4 ">
                <div className="text-white border bg-[#1877F2] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
                  <FaFacebookF size={20} />
                </div>

                <div className="text-white border bg-[#05d686] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
                  <SiNaver size={20} />
                </div>
                <div className="relative text-black/80  border bg-[#FEE500] w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
                  <Image src={`/kakaotalk_sharing_btn_medium.png`} fill />
                </div>

                <div className="text-white border instagram w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
                  <SiInstagram size={20} />
                </div>
                <div className="text-[#1DA1F2] border bg-gray-50 w-12 h-12 rounded-lg flex items-center justify-center shadow-xl  cursor-pointer">
                  <SiTwitter size={20} />
                </div>
              </div>

              <p className="text-sm">링크복사하기</p>

              <div className="border-2 border-gray-200 flex justify-between items-center mt-4 py-2">
                <BiLinkAlt size={20} />
                <input
                  className="w-full outline-none bg-transparent"
                  type="text"
                  placeholder="link"
                  defaultValue="https://boxicons.com/?query=link"
                />
                <button className="bg-indigo-500 text-white rounded text-sm py-2 px-5 mr-2 hover:bg-indigo-600">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
