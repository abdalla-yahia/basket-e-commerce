
type Product = {
  id: number;
  title: string;
  price: number;
  brand: string;
  ram: string;
  storage: string;
  screen: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "iPhone 15",
    price: 1200,
    brand: "Apple",
    ram: "6 GB",
    storage: "128 GB",
    screen: "6.1 inch",
  },
  {
    id: 2,
    title: "Samsung S24",
    price: 1000,
    brand: "Samsung",
    ram: "8 GB",
    storage: "256 GB",
    screen: "6.4 inch",
  },
];
export default function Compare_Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🔍 مقارنة المنتجات</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">الميزة</th>
              {products.map((p) => (
                <th key={p.id} className="p-3 border">
                  {p.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border font-semibold">السعر</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  ${p.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">الماركة</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">الرام</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.ram}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">التخزين</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.storage}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-3 border font-semibold">الشاشة</td>
              {products.map((p) => (
                <td key={p.id} className="p-3 border">
                  {p.screen}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
