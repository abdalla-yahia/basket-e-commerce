'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const stats = [
  { title: 'Today Orders', value: 12, icon: '🛒' },
  { title: 'Active Users', value: 340, icon: '👥' },
  { title: 'Total Products', value: 129, icon: '📦' },
  { title: 'Today Sales', value: '4,300 EGP', icon: '💰' },
];

const salesData = [
  { day: 'Saturday', sales: 1000 },
  { day: 'Sunday', sales: 1500 },
  { day: 'Monday', sales: 2300 },
  { day: 'Tuesday', sales: 1800 },
  { day: 'Wednesday', sales: 2800 },
  { day: 'Thursday', sales: 3500 },
  { day: 'Friday', sales: 2200 },
];

const lastOrders = [
  { id: 'ORD:0123', user: 'Ahmed Ali', total: '450 EGP', status: 'PENDING', date: '2025-08-04' },
  { id: 'ORD:0124', user: 'Mona Mohamed', total: '800 EGP', status: 'DELIVERED', date: '2025-08-03' },
  { id: 'ORD:0125', user: 'Khaled Samir', total: '1200 EGP', status: 'CANCELED', date: '2025-08-03' },
  { id: 'ORD:0126', user: 'Yasser Abdo', total: '300 EGP', status: 'PENDING', date: '2025-08-02' },
  { id: 'ORD:0127', user: 'Sara Gamal', total: '950 EGP', status: 'DELIVERED', date: '2025-08-01' },
];
  const orderStatus = [
    { name: "Completed", value: 45 },
    { name: "Pending", value: 35 },
    { name: "Canceled", value: 18 },
  ];
  const COLORS = ["#00C49F", "#FFBB28", "#FF4D4F"];

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
}

export default function Admins_Dashboard_Container() {
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">Admin Dashboard {/* {data?.me?.name} */}</h1>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Chart */}
        <div className=" rounded-lg shadow p-4 ">
          <h2 className="text-lg font-semibold mb-4">Orders Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={orderStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                dataKey="value"
                label={({ name }) => name}
              >
                {orderStatus.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Weekly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Last orders */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Total</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.user}</td>
                  <td className="p-2">{order.total}</td>
                  <td className="p-2">
                      {/*Order Status*/}
                        {
                        order.status == 'PENDING'   ? <p className='rounded-xl p-0.5 flex justify-center bg-sky-200 text-sky-600'>{order.status?.toLowerCase()}</p>:
                        order.status == 'PREPARING' ? <p className='rounded-xl p-0.5 flex justify-center bg-blue-300 text-blue-600'>{order.status?.toLowerCase()}</p>:
                        order.status == 'SHIPPED'   ? <p className='rounded-xl p-0.5 flex justify-center bg-green-200 text-green-600'>{order.status?.toLowerCase()}</p>:
                        order.status == 'DELIVERED' ? <p className='rounded-xl p-0.5 flex justify-center bg-green-300 text-green-700'>{order.status?.toLowerCase()}</p>:
                        order.status == 'CANCELED'  ? <p className='rounded-xl p-0.5 flex justify-center bg-red-200 text-black'>{order.status?.toLowerCase()}</p>:
                        <p className='rounded-xl p-0.5 flex justify-center bg-red-300 text-black'>{order.status?.toLowerCase()}</p>
                        }
                  </td>
                  <td className="p-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
