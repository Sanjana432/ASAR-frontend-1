import React from "react";
import { MapPin, Activity, Clock } from "lucide-react";

export default function CongestionMap() {
  const trafficData = [
    { location: "Downtown Junction", status: "High", color: "bg-red-500", vehicles: 245 },
    { location: "Highway 101 Exit", status: "Medium", color: "bg-yellow-500", vehicles: 156 },
    { location: "Mall Intersection", status: "Low", color: "bg-green-500", vehicles: 89 },
    { location: "Airport Road", status: "High", color: "bg-red-500", vehicles: 203 },
  ];

  const getBadgeStyle = (status) => {
    switch (status) {
      case "High":
        return "bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium";
      default:
        return "bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium";
    }
  };

  return (
    <div className="space-y-6">
      {/* Traffic Map Card */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b px-4 py-2 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          <h2 className="font-semibold">Real-Time Traffic Map</h2>
        </div>
        <div className="p-4">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Interactive Traffic Map</p>
              <p className="text-sm text-gray-400">Real-time congestion data visualization</p>
            </div>
          </div>

          {/* Traffic Data List */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trafficData.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 border rounded-lg bg-white"
              >
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.location}</p>
                  <p className="text-xs text-gray-500">{item.vehicles} vehicles</p>
                </div>
                <span className={getBadgeStyle(item.status)}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Active Signals */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-3">
          <Activity className="h-6 w-6 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Active Signals</p>
            <p className="text-2xl font-semibold">127</p>
          </div>
        </div>

        {/* Avg Wait Time */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-3">
          <Clock className="h-6 w-6 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Avg Wait Time</p>
            <p className="text-2xl font-semibold">2.4m</p>
          </div>
        </div>

        {/* Incidents */}
        <div className="bg-white shadow rounded-lg p-6 flex items-center space-x-3">
          <MapPin className="h-6 w-6 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Incidents</p>
            <p className="text-2xl font-semibold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
