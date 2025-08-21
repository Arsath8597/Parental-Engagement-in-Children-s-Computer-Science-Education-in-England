import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const data = [
  { day: "Mon", logins: 20 },
  { day: "Tue", logins: 35 },
  { day: "Wed", logins: 25 },
  { day: "Thu", logins: 50 },
  { day: "Fri", logins: 70 },
  { day: "Sat", logins: 40 },
  { day: "Sun", logins: 60 },
];

const MotionLink = motion(Link);

function Dashboard() {
  return (
    <div className="p-6 flex flex-col items-center w-full">
      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="logins"
            stroke="#00bcd4"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Motion Link Button */}
      <MotionLink
        to="/login"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 bg-cyan-500 text-white py-2 rounded-full shadow-md hover:bg-cyan-600 transition duration-300 text-center"
      >
        Sign In
      </MotionLink>
    </div>
  );
}

export default Dashboard;
