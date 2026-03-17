import HeroPage from "../components/HeroPage";
import Products from "../components/Products";
import HowItWorks from "../components/HowItWorks";
import CustomOrder from "../components/CustomOrder";
import Category from "../components/Category";
import Materials from "../components/Materials";
import Customers from "../components/Customers";
import FAQs from "../components/FAQs";
import Banner from "../components/Banner";

export default function Home({ onAdd, onView, onQuoteOpen, onQuoteSuccess }) {
  return (
    <>
        <HeroPage />
        <Products onAdd={onAdd} onView={onView} />
        <HowItWorks />
        <CustomOrder onQuoteOpen={onQuoteOpen} onQuoteSuccess={onQuoteSuccess} />
        <Category />
        <Materials />
        <Customers />
        <FAQs />
        <Banner />
    </>
  );
}
