import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      <div className="h-full flex-1 mt-2 bg-white">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
