import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="h-full flex-1">
        <Navbar />

        <div className="h-full mt-2 bg-white">{children}</div>

        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
