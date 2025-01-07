import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import ProductList from "./components/productList/ProductList";
import CategoryBar from "./components/categoryBar/CategoryBar";



export default function Home() {
  

  return (
    <main>
      <Navbar/>
      <NavbarMobile/>
      <CategoryBar/>
      <Link href={'/users'}>users</Link>
      <ProductList/>
      
    </main>
  );
}
