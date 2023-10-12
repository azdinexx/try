import { getProducts } from '@/lib/shopify';
import Image from 'next/image';

export default async function Home() {
  const Products = await getProducts({});
  return (
    <main>
      {Products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <Image
              src={product.images[0].url}
              alt={product.title}
              width={200}
              height={200}
            />
          </div>
        );
      })}
    </main>
  );
}
