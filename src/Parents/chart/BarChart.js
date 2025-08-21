import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Login: 40 },
  { name: "Feb", Login: 30 },
  { name: "Mar", Login: 50 },
  { name: "Apr", Login: 20 },
  { name: "May", Login: 60 },
];

export default function BarChartComponent() {
  return (
    <div className="w-full max-w-2xl  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
        Monthly logins
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid #ccc",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Bar dataKey="Login" fill="url(#colorSales)" radius={[8, 8, 0, 0]} />
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
