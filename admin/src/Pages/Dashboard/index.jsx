import React from "react";
import {
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa";
import { Card, Text, Group, Title } from "@mantine/core";
import { RiQuestionnaireFill } from "react-icons/ri";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total Enquiry",
    value: 1284,
    icon: <RiQuestionnaireFill size={24} />,
    color: "orange",
    trend: 15.4,
  },
  {
    title: "Active Users",
    value: 857,
    icon: <FaUsers size={24} />,
    color: "blue",
    trend: -5.2,
  },
  {
    title: "Products",
    value: 324,
    icon: <FaBoxOpen size={24} />,
    color: "purple",
    trend: 8.7,
  },
  {
    title: "Category",
    value: 14,
    icon: <FaBoxOpen size={24} />,
    color: "purple",
    trend: 8.7,
  },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 7000 },
  { month: "Jun", revenue: 8000 },
];

const productSales = [
  { product: "Laptops", sales: 400 },
  { product: "Phones", sales: 600 },
  { product: "Tablets", sales: 300 },
  { product: "Accessories", sales: 200 },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            shadow="md"
            padding="lg"
            radius="md"
            className={`bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-50 hover:shadow-lg transition-shadow`}
          >
            <Group position="apart">
              <div className={`text-${stat.color}-600 p-3 rounded-lg bg-white`}>
                {stat.icon}
              </div>
              <div className="text-right">
                <Text size="sm">
                  {stat.title}
                </Text>
                <Title order={2} className="mt-1">
                  {stat.value}
                </Title>
                <Text
                  size="sm"
                  className={`mt-1 ${
                    stat.trend > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend > 0 ? "+" : ""}
                  {stat.trend}%
                </Text>
              </div>
            </Group>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card shadow="md" padding="md" radius="md" className="bg-white">
          <Title order={3} className="mb-4">
            Revenue Trend
          </Title>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Product Sales Chart */}
        <Card shadow="md" padding="md" radius="md" className="bg-white">
          <Title order={3} className="mb-4">
            Product Sales
          </Title>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Additional Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card shadow="md" padding="md" radius="md" className="bg-white">
          <Title order={3} className="mb-4">
            Customer Acquisition
          </Title>
          <div className="h-64">{/* Add another chart here */}</div>
        </Card>
        <Card shadow="md" padding="md" radius="md" className="bg-white">
          <Title order={3} className="mb-4">
            Recent Activity
          </Title>
          <div className="h-64">{/* Add activity feed here */}</div>
        </Card>
      </div>
    </div>
  );
}