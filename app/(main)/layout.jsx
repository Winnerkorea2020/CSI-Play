import Ticker from "@/components/Ticker/Ticker";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";

const layout = ({ children }) => {
  return (
    <section className="pt-16 flex flex-col justify-between min-h-screen ">
      <Header />
      <main className="flex-1 py-2">
        <div>{children}</div>
      </main>
      <Footer />
    </section>
  );
};

export default layout;
