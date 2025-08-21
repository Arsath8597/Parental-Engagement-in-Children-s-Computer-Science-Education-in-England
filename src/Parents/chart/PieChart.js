import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  { name: "Parent contributions", value: 60 },
  { name: "community average", value: 40 },
];

const COLORS = ["#00C49F", "#FF8042"];

const MotionLink = motion(Link);

function Dashboard() {
  return (
    <div className="w-full max-w-2xl  bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 text-transparent bg-clip-text">
        Parent contributions
      </h2>

      <div className="flex justify-center">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(6px)",
              border: "1px solid #ccc",
              color: "#fff",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;
