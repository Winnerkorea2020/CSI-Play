import Link from "next/link";
import { LiaEyeSolid } from "react-icons/lia";

const NotificationDropdown = ({
  notifications,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const onCloseHandler = () => {
    isDropdownOpen && setIsDropdownOpen(false);
  };
  return (
    <div className=" z-50 my-4 max-w-sm text-base bg-white rounded-xl shadow-lg">
      <div className="block py-2 px-4 text-center text-gray-900 bg-gray-300 rounded-t-xl">
        Notifications
      </div>
      <ul className="px-2 divide-y divide-gray-200">
        {notifications.map((notification) => (
          <li key={notification.id} onClick={onCloseHandler}>
            <Link href="/" className="flex py-3 px-4">
              <div className="text-gray-700 hover:text-blue-500 ">
                {notification.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/"
        className="block py-2 text-base font-normal text-center text-gray-50 bg-gray-400  hover:bg-gray-300 rounded-b-xl"
      >
        <div className="inline-flex items-center ">
          <LiaEyeSolid size={20} />
          <span className="ml-1">View all</span>
        </div>
      </Link>
    </div>
  );
};
export default NotificationDropdown;
