import Link from "next/link";
import LogoutButton from "./components/logoutButton/LogoutButton";
import Navbar from "./components/navbar/Navbar";
import NavbarMobile from "./components/navbarMobile/NavbarMobile";
import CategoryBar from "./components/categoryBar/CategoryBar";
import ProductList from "./components/productList/ProductList";
import properties from "./properties";
import { cookies } from "next/headers";
import { decrypt } from "./lib/session";
import NewProductList from "./components/newProductList/NewProductList";

interface Product {
  _id: string,
  imageName: string[],
  price: number,
  description: string,
  articleCode: string,
  imageUrl: string[],
  title: string,
  isAvailable: boolean,
  quantity: number,
  category: string,
}

interface Category {
  name: string,
  _id: string
}



export default async function Home() {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  const data = await fetch(properties.productsUrl);
  const products : Product[] = await data.json();
  const newProduct = products[0];

  const dataCategories = await fetch(properties.categoriesUrl);
  const categories : Category[] = await dataCategories.json();
  return (
    <main>
      <NavbarMobile/>
      
      <CategoryBar categories={categories} />
      <h1 className='text-2xl font-bold p-2 w-100'>Producten</h1>
      <ProductList products={products} isAuthenticated={session !== undefined}/> 
    </main>
  )
}
