import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <div className="overflow-auto overscroll-auto flex flex-col justify-between w-full">
        <Navbar />

        <div className="h-full mt-2 bg-white">{children}</div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
