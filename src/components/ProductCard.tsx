import { Product } from "@/lib/product";

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
};

export default function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div className="flex justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-1 overflow-hidden">
        <h2 className="truncate text-lg font-bold">{product.name}</h2>
        <p className="text-pink-600">
          ចាប់ពី $ {product.price}{" "}
          <span className="text-sm text-gray-500 line-through">
            $ {product.oldPrice}
          </span>
        </p>
        <p className="line-clamp-2 text-gray-500">{product.description}</p>
        {product.isPopular && <p className="text-sm">🔥 ពេញនិយម</p>}
      </div>

      <div className="relative h-36 w-44 shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full rounded-xl object-cover"
        />
        <button
          onClick={() => onAdd(product)}
          className="absolute bottom-2 right-2 h-10 w-10 rounded-full bg-white text-2xl shadow"
        >
          +
        </button>
      </div>
    </div>
  );
}
