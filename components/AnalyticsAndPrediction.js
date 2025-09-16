import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  BarChart3,
  Download,
  TrendingUp,
  Clock,
  MapPin,
  AlertTriangle,
  Users,
} from "lucide-react";

export default function AnalyticsAndPrediction() {
  const [timeRange, setTimeRange] = useState("7d");

  // --- Data ---
  const hourlyTrafficData = [
    { time: "00:00", volume: 45, prediction: 52 },
    { time: "06:00", volume: 189, prediction: 195 },
    { time: "12:00", volume: 356, prediction: 372 },
    { time: "18:00", volume: 512, prediction: 528 },
    { time: "22:00", volume: 178, prediction: 185 },
  ];

  const congestionDistribution = [
    { name: "Low", value: 45, color: "#10b981" },
    { name: "Medium", value: 35, color: "#f59e0b" },
    { name: "High", value: 20, color: "#ef4444" },
  ];

  const weeklyTrafficData = [
    { day: "Mon", vehicles: 12340 },
    { day: "Fri", vehicles: 15670 },
    { day: "Sun", vehicles: 9800 },
  ];

  const hourlyPatternData = [
    { hour: "06", efficiency: 75 },
    { hour: "08", efficiency: 65 },
    { hour: "12", efficiency: 72 },
    { hour: "16", efficiency: 62 },
    { hour: "20", efficiency: 80 },
  ];

  const junctionPredictions = [
    { name: "Main St & 1st Ave", current: 245, predicted: 289, change: "+18%", risk: "Medium" },
    { name: "Highway 101 Exit", current: 156, predicted: 198, change: "+27%", risk: "High" },
    { name: "Downtown Plaza", current: 203, predicted: 187, change: "-8%", risk: "Low" },
  ];

  const performanceMetrics = [
    { metric: "Signal Efficiency", value: "87.3%", change: "+2.1%", trend: "up" },
    { metric: "Average Wait Time", value: "2.4 min", change: "-0.3 min", trend: "down" },
  ];

  // --- Helper ---
  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          Traffic Analytics & Prediction
        </div>
        <div className="flex items-center gap-2">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="24h">Last 24h</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
          </select>
          <button className="flex items-center border px-3 py-1 rounded text-sm">
            <Download className="h-4 w-4 mr-1" /> Export
          </button>
        </div>
      </div>

      {/* Traffic Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow lg:col-span-2">
          <h2 className="flex items-center gap-2 font-medium mb-2">
            <TrendingUp className="h-5 w-5 text-blue-600" /> 24-Hour Traffic Prediction
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hourlyTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="volume" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="prediction" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="flex items-center gap-2 font-medium mb-2">
            <Clock className="h-5 w-5 text-green-600" /> Congestion Distribution
          </h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={congestionDistribution} cx="50%" cy="50%" outerRadius={70} dataKey="value">
                {congestionDistribution.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Junction Predictions */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="flex items-center gap-2 font-medium mb-4">
          <MapPin className="h-5 w-5 text-purple-600" /> Junction Predictions (Next 2 Hours)
        </h2>
        <div className="space-y-3">
          {junctionPredictions.map((junction, i) => (
            <div key={i} className="p-3 border rounded-lg">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{junction.name}</span>
                <span className={`px-2 py-0.5 rounded text-xs ${getRiskColor(junction.risk)}`}>
                  {junction.risk} Risk
                </span>
              </div>
              <div className="grid grid-cols-4 text-sm gap-2">
                <p>Current: {junction.current}</p>
                <p>Predicted: {junction.predicted}</p>
                <p className={junction.change.startsWith("+") ? "text-red-600" : "text-green-600"}>
                  Change: {junction.change}
                </p>
                <p>
                  Action:{" "}
                  {junction.risk === "High" ? "Signal Adjust" : junction.risk === "Medium" ? "Monitor" : "Normal"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-medium mb-2">Weekly Traffic Volume</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="vehicles" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-medium mb-2">System Efficiency</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={hourlyPatternData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
          <p className="text-sm text-gray-500">Prediction Accuracy</p>
          <p className="text-2xl font-semibold">94.2%</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <Clock className="h-8 w-8 mx-auto mb-2 text-green-500" />
          <p className="text-sm text-gray-500">Next Update</p>
          <p className="text-2xl font-semibold">15m</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
          <p className="text-sm text-gray-500">Risk Areas</p>
          <p className="text-2xl font-semibold">3</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-purple-500" />
          <p className="text-sm text-gray-500">Monitored Points</p>
          <p className="text-2xl font-semibold">127</p>
        </div>
      </div>
    </div>
  );
}
