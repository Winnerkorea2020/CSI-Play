import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
