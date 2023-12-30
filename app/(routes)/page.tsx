import getBillboards from "@/actions/get-billboard";
import Billboard from "../components/billboard";
import Container from "../components/ui/container";
import getProducts from "@/actions/get-products";
import ProductList from "../components/product-list";
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("6e4e67d6-98fb-4d98-b9ad-6156fd87cf97");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="featured products " items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
