import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  BarChart3,
  Download,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";

export default function DataAnalysis() {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeTab, setActiveTab] = useState("overview");

  const weeklyTrafficData = [
    { day: "Mon", vehicles: 12340, avgSpeed: 32, peakHours: 8.5 },
    { day: "Tue", vehicles: 13250, avgSpeed: 28, peakHours: 9.2 },
    { day: "Wed", vehicles: 12890, avgSpeed: 30, peakHours: 8.8 },
    { day: "Thu", vehicles: 13450, avgSpeed: 27, peakHours: 9.5 },
    { day: "Fri", vehicles: 15670, avgSpeed: 24, peakHours: 10.2 },
    { day: "Sat", vehicles: 11200, avgSpeed: 35, peakHours: 6.5 },
    { day: "Sun", vehicles: 9800, avgSpeed: 38, peakHours: 5.2 },
  ];

  const hourlyPatternData = [
    { hour: "00", volume: 234, efficiency: 92 },
    { hour: "02", volume: 156, efficiency: 95 },
    { hour: "04", volume: 189, efficiency: 88 },
    { hour: "06", volume: 567, efficiency: 75 },
    { hour: "08", volume: 1234, efficiency: 65 },
    { hour: "10", volume: 890, efficiency: 78 },
    { hour: "12", volume: 1056, efficiency: 72 },
    { hour: "14", volume: 1189, efficiency: 70 },
    { hour: "16", volume: 1345, efficiency: 62 },
    { hour: "18", volume: 1456, efficiency: 58 },
    { hour: "20", volume: 987, efficiency: 80 },
    { hour: "22", volume: 567, efficiency: 85 },
  ];

  const performanceMetrics = [
    { metric: "Signal Efficiency", value: "87.3%", change: "+2.1%", trend: "up" },
    { metric: "Average Wait Time", value: "2.4 min", change: "-0.3 min", trend: "down" },
    { metric: "Traffic Flow Rate", value: "1,248 v/h", change: "+156 v/h", trend: "up" },
    { metric: "Incident Response", value: "4.2 min", change: "-0.8 min", trend: "down" },
  ];

  const junctionPerformance = [
    { name: "Main St & 1st Ave", efficiency: 92, incidents: 2, avgWait: 2.1 },
    { name: "Highway 101 Exit", efficiency: 78, incidents: 5, avgWait: 3.2 },
    { name: "Mall Intersection", efficiency: 95, incidents: 1, avgWait: 1.8 },
    { name: "Downtown Plaza", efficiency: 85, incidents: 3, avgWait: 2.7 },
    { name: "Park Ave & Center", efficiency: 88, incidents: 2, avgWait: 2.3 },
  ];

  return (
    <div className="space-y-6">
      {/* Card wrapper */}
      <div className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="border-b px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-600" />
            <h2 className="font-semibold">Traffic Data Analysis</h2>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="24h">Last 24h</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
            </select>
            <button className="border px-3 py-1 rounded text-sm flex items-center">
              <Download className="h-4 w-4 mr-1" /> Export
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="p-4 space-y-4">
          <div className="flex border-b space-x-4">
            {["overview", "patterns", "performance", "junctions"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-blue-600"
                    : "text-gray-500"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">{metric.metric}</p>
                      <p className="text-2xl font-semibold">{metric.value}</p>
                      <p
                        className={`text-sm ${
                          metric.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium mb-2">Weekly Traffic Volume</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyTrafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="vehicles" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Patterns Tab */}
          {activeTab === "patterns" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-medium mb-2">Hourly Traffic Volume</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={hourlyPatternData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="volume"
                        stroke="#3b82f6"
                        fill="#3b82f6"
                        fillOpacity={0.3}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-medium mb-2">System Efficiency</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={hourlyPatternData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="hour" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="efficiency"
                        stroke="#10b981"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-medium mb-2">Average Speed vs Volume</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyTrafficData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Bar yAxisId="left" dataKey="vehicles" fill="#3b82f6" />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="avgSpeed"
                      stroke="#ef4444"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Performance Tab */}
          {activeTab === "performance" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-6 shadow text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <p className="text-sm text-gray-500">System Uptime</p>
                <p className="text-2xl font-semibold">99.7%</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <p className="text-sm text-gray-500">Daily Throughput</p>
                <p className="text-2xl font-semibold">89.2K</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <p className="text-sm text-gray-500">Peak Duration</p>
                <p className="text-2xl font-semibold">8.7h</p>
              </div>
            </div>
          )}

          {/* Junctions Tab */}
          {activeTab === "junctions" && (
            <div className="bg-white rounded-lg shadow p-4 space-y-4">
              <h3 className="font-medium mb-2">Junction Performance Comparison</h3>
              {junctionPerformance.map((junction, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{junction.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">Efficiency:</span>
                      <span
                        className={`font-medium ${
                          junction.efficiency >= 90
                            ? "text-green-600"
                            : junction.efficiency >= 80
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {junction.efficiency}%
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Incidents</p>
                      <p className="font-medium">{junction.incidents}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Avg Wait</p>
                      <p className="font-medium">{junction.avgWait} min</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p className="font-medium text-green-600">Operational</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
