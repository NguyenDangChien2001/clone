import Header from "../../component/Header";
import Footer from "../../component/Footer";

function DefaultLayout({ children }) {
  return (
    <div className="bg-dark">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
