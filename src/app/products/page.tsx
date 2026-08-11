import { getRanges, getFeaturedProducts } from "@/lib/content";
import ProductsCatalogueClient from "./ProductsCatalogueClient";

export default async function ProductsPage() {
  const ranges = await getRanges();
  const products = await getFeaturedProducts();

  return <ProductsCatalogueClient ranges={ranges} products={products} />;
}
