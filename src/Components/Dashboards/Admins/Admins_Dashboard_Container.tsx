'use client';
import { RootState, useAppSelector } from '@/libs/store';
import * as icon from '@/Utils/Icons/Icons'
import { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';


const salesData = [
  { day: 'Saturday', sales: 1000 },
  { day: 'Sunday', sales: 1500 },
  { day: 'Monday', sales: 2300 },
  { day: 'Tuesday', sales: 1800 },
  { day: 'Wednesday', sales: 2800 },
  { day: 'Thursday', sales: 3500 },
  { day: 'Friday', sales: 2200 },
];


const orderStatus = [
  { name: "Completed", value: 45 },
  { name: "Pending", value: 35 },
  { name: "Canceled", value: 18 },
];
const COLORS = ["#00C49F", "#FFBB28", "#FF4D4F"];


export default function Admins_Dashboard_Container() {
  const { LogedUser } = useAppSelector((state: RootState) => state.auth)
  const { AllUsers } = useAppSelector((state: RootState) => state.user)
  const { AllOrders } = useAppSelector((state: RootState) => state.order)
  const { AllProducts } = useAppSelector((state: RootState) => state.product)

  const orderStatusData = useMemo(() => {
  if (!AllOrders?.orders) return [];
  const statusCount: Record<string, number> = {};

  AllOrders.orders.forEach((order) => {
    const status = order.status || "Unknown";
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  return Object.entries(statusCount).map(([status, count]) => ({
    name: status,
    value: count,
  }));
}, [AllOrders?.orders]);

  return (
    <div className="py-6 space-y-6 w-full">
      {/*Page Title*/}
      <h1 className="text-2xl font-bold text-primary my-3 gap-3 flex justify-start items-center">
        <icon.IoBarChart className="text-2xl" />
        Admin Dashboard {LogedUser?.user?.name}</h1>
      {/* State cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/*USERS COUNT*/}
        <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
          <div className="text-3xl">
            <icon.FaUsers className='text-primary' />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Users</p>
            <p className="text-lg font-bold">{AllUsers?.users?.length}</p>
          </div>
        </div>
        {/*ORDERS*/}
        <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
          <div className="text-3xl">
            <icon.LiaShippingFastSolid className='text-primary' />
          </div>
          <div>
            <p className="text-gray-500 text-sm">All Orders</p>
            <p className="text-lg font-bold">{AllOrders?.orders?.length}</p>
          </div>
        </div>
        {/*TOTAL PRODUCTS*/}
        <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
          <div className="text-3xl">
            <icon.FaBoxOpen className='text-primary' />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Products</p>
            <p className="text-lg font-bold">{AllProducts?.FullyProducts?.length}</p>
          </div>
        </div>
        {/*TOTAL SALE*/}
        <div className="bg-white  p-4 rounded shadow flex items-center gap-4">
          <div className="text-3xl">
            <icon.GrCurrency className='text-primary' />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Sales</p>
            <p className="text-lg font-bold">4,500 USD</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className=" rounded-lg shadow p-4 ">
        <h2 className="text-lg font-semibold mb-4">Orders Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
           <Pie
              data={orderStatusData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
              label={({ name }) => name} 
            >
              {orderStatusData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white  py-4 rounded shadow w-full">
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
      <div className="bg-white  py-4 rounded shadow w-full">
        <h2 className="text-xl font-semibold mb-4">Latest Orders</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-gray-100 ">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {AllOrders?.orders?.map((order) => (
                <tr key={order.id} className="border-b ">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.user?.name}</td>
                  <td className="p-2">
                    {/*Order Status*/}
                    {
                      order.status == 'PENDING' ? <p className='rounded-xl p-0.5 flex justify-center bg-sky-200 text-sky-600'>{order.status?.toLowerCase()}</p> :
                        order.status == 'PREPARING' ? <p className='rounded-xl p-0.5 flex justify-center bg-blue-300 text-blue-600'>{order.status?.toLowerCase()}</p> :
                          order.status == 'SHIPPED' ? <p className='rounded-xl p-0.5 flex justify-center bg-green-200 text-green-600'>{order.status?.toLowerCase()}</p> :
                            order.status == 'DELIVERED' ? <p className='rounded-xl p-0.5 flex justify-center bg-green-300 text-green-700'>{order.status?.toLowerCase()}</p> :
                              order.status == 'CANCELED' ? <p className='rounded-xl p-0.5 flex justify-center bg-red-200 text-black'>{order.status?.toLowerCase()}</p> :
                                <p className='rounded-xl p-0.5 flex justify-center bg-red-300 text-black'>{order.status?.toLowerCase()}</p>
                    }
                  </td>
                  <td className="p-2">{new Date().toLocaleString(('ar-eg'), { year: '2-digit', month: 'short', day: '2-digit' })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
