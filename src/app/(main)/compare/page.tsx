
type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  category: string;
  oldPrice: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "All Natural Italian-Style Chicken Meatballs",
    price: 7.25,
    brand: "Hut",
    category: "Meat & Seafood",
    oldPrice: 9.35,
    image: "https://res.cloudinary.com/dghqvxueq/image/upload/v1756709091/pszqbw6wefg1moksvsno.png",
  },
  {
    id: 2,
    title: "foster farms takeout crispy classic buffalo…",
    price: 49.99,
    brand: "Mac ",
    category: "Meat & Seafood",
    oldPrice: 65.85,
    image: "https://res.cloudinary.com/dghqvxueq/image/upload/v1756711775/drur4cpmhsh5yzkxsjs9.png",
  },
];
export default function Compare_Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🔍 Compare Products</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Title</th>
              {products.map((p) => (
                <th key={p.id} className="p-3 border">
                  {p.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border font-semibold">Price</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  ${p.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Brand</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Category</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.category}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Old Price</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.oldPrice}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">image</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.image}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
