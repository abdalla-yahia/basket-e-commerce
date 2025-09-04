'use client';
import { UpdateOrder } from '@/Interfaces/OrderInterface';
import { RootState, useAppSelector } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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


export default function Users_Dashboard_Container() {
  const { user } = useAppSelector((state: RootState) => state.user)
  return (
    <div className="py-6 space-y-6 w-full">
      <h1 className="text-2xl font-bold">Welcome 👋 {user?.user?.name}</h1>
      <p className="text-gray-600  mb-4">
        This is your personal account, you can track everything from here.
      </p>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/*User Wallet*/}
           <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
            <div className="text-3xl">
              <icon.FaMoneyBillWave />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Wallet Balance</p>
              <p className="text-lg font-bold">250 USD</p>
            </div>
          </div>
          {/*User Orders*/}
           <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
            <div className="text-3xl">
              <icon.LiaShippingFastSolid />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Orders</p>
              <p className="text-lg font-bold">{user?.user?.orders?.length}</p>
            </div>
          </div>
          {/*User WashList*/}
           <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
            <div className="text-3xl">
              <icon.FaHeart />
            </div>
            <div>
              <p className="text-gray-500 text-sm">WishList</p>
              <p className="text-lg font-bold">{user?.user?.wishlist?.products?.length  || 3}</p>
            </div>
          </div>
          {/*User Reviews*/}
           <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
            <div className="text-3xl">
              <icon.MdRateReview />
            </div>
            <div>
              <p className="text-gray-500 text-sm">My Reviews</p>
              <p className="text-lg font-bold">{user?.user?.review || 5}</p>
            </div>
          </div>
      </div>

      {/* Chart */}
      <div className="bg-white  py-4 rounded shadow w-full">
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
      <div className="bg-white  py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Last Orders</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-right">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-2">Order ID</th>
                <th className="p-2">Date</th>
                <th className="p-2">Status</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {user?.user?.orders?.map((order) => (
                <tr key={order.id} className="border-b ">
                  <td className="p-2">ORD:0{order?.id}</td>
                  <td className="p-2">{order?.createdAt}</td>
                  <td className="p-2">{order?.status}</td>
                  <td className="p-2">{order?.items?.reduce((acc,rec)=>acc + (+rec?.quantity ||1 * +rec?.price ),0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
