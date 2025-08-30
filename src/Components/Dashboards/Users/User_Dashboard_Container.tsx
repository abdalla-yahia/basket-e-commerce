'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { title: 'Orders', value: 7, icon: '📦' },
  { title: 'Wallet Balance', value: '350 EGP', icon: '💰' },
  { title: 'Favorites', value: 5, icon: '❤️' },
  { title: 'My Reviews', value: 3, icon: '⭐' },
];

const chartData = [
  { month: 'March', amount: 500 },
  { month: 'April', amount: 800 },
  { month: 'May', amount: 1000 },
  { month: 'June', amount: 700 },
  { month: 'July', amount: 1200 },
  { month: 'August', amount: 900 },
];

const lastOrders = [
  { id: 'ORD3001', date: '2025-08-01', status: 'Delivered', total: '450 EGP' },
  { id: 'ORD3002', date: '2025-07-28', status: 'In Progress', total: '320 EGP' },
  { id: 'ORD3003', date: '2025-07-25', status: 'Canceled', total: '250 EGP' },
];

function UserStatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
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

export default function Users_Dashboard_Container() {
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">Welcome 👋</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        This is your personal account, you can track everything from here.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <UserStatCard key={i} {...stat} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Your Purchases in the Last Months</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Last Orders */}
      <div className="bg-white dark:bg-gray-900 py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Last Orders</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {lastOrders.map((order) => (
                <tr key={order.id} className="border-b dark:border-gray-700">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.date}</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
