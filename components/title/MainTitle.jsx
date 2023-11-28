import Link from "next/link";
import { LiaAngleRightSolid } from "react-icons/lia";

const MainTitle = ({ title, url }) => {
  return (
    <div className="main__box--title">
      {url ? (
        <>
          <h3 className="main__title">{title}</h3>
          <Link href={url}>
            <LiaAngleRightSolid size={20} />
          </Link>
        </>
      ) : (
        <>
          <h3 className="main__title">{title}</h3>
        </>
      )}
    </div>
  );
};

export default MainTitle;
