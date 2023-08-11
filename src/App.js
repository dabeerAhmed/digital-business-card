import Interest from "./components/interest";
import About from "./components/about";
import Info from "./components/info";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="full-card">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>

  );
}
