import { useRouter } from "next/router";

export default function ProductDetail({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const listPath = ["0001", "0002", "0003", "0004", "0005"];

  const paths = listPath.map((path) => ({
    params: { productId: path },
  }));

  // Trả về mảng paths
  return { paths, fallback: true };
}

export const getStaticProps = async function ({ params }) {
  const productId = params.productId;

  const product = {
    id: `${productId}`,
    name: `product${productId}`,
    price: "100000",
  };
  return {
    props: {
      product,
    },
    revalidate: 300,
  };
};
