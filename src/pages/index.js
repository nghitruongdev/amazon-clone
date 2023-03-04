import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
   <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
      {/* ---- Header---- */}
    <Header />
    
    <main className="max-w-screen-xl mx-auto ">
      {/* Banner */}
      <Banner />

      {/* Poduct Feed */}
      <ProductFeed products={products} />
      <div>

      </div>
    </main>

    </div>
  );
}


export async function getServerSideProps(context){
  console.log('products called');

  const url = `https://fakestoreapi.com/products`
  const products = await fetch(url).then(res => res.json())
  return {
    props: {
      products
    }
  }
}