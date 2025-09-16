import React, { useState } from "react";
import {
  AlertTriangle,
  Siren,
  Car,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  X,
} from "lucide-react";

export default function EmergencyAlerts() {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: "Accident",
      severity: "High",
      location: "Highway 101 & Oak St",
      time: "3 mins ago",
      description: "Multi-vehicle collision blocking 2 lanes",
      status: "Active",
      responders: "Police, Ambulance en route",
      eta: "5 mins",
      icon: Car,
    },
    {
      id: 2,
      type: "Emergency Vehicle",
      severity: "Medium",
      location: "Main St & 1st Ave",
      time: "1 min ago",
      description: "Fire truck requesting priority signal override",
      status: "Active",
      responders: "Fire Department",
      eta: "2 mins",
      icon: Siren,
    },
    {
      id: 3,
      type: "Medical Emergency",
      severity: "High",
      location: "Downtown Plaza",
      time: "8 mins ago",
      description: "Ambulance requesting clear path to hospital",
      status: "Resolved",
      responders: "Ambulance",
      eta: "Arrived",
      icon: Phone,
    },
  ]);

  const activeAlerts = alerts.filter((alert) => alert.status === "Active");

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-medium";
      case "Low":
        return "bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-medium";
      default:
        return "bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs font-medium";
    }
  };

  const resolveAlert = (id) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === id ? { ...alert, status: "Resolved" } : alert
      )
    );
  };

  const dismissAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Active Alert Banner */}
      {activeAlerts.length > 0 && (
        <div className="flex items-center space-x-2 border border-red-200 bg-red-50 p-3 rounded-lg">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <p className="text-red-800 text-sm">
            {activeAlerts.length} active emergency alert(s) requiring attention
          </p>
        </div>
      )}

      {/* Alerts List */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            Emergency Alerts & Responses
          </div>
          <button className="border px-3 py-1 rounded text-sm hover:bg-gray-100">
            New Alert
          </button>
        </div>
        <div className="p-4 space-y-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={`border rounded-lg p-4 ${
                  alert.status === "Active"
                    ? "border-red-200 bg-red-50"
                    : "border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <Icon
                      className={`h-5 w-5 mt-1 ${
                        alert.status === "Active"
                          ? "text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-medium">{alert.type}</h3>
                        <span className={getSeverityColor(alert.severity)}>
                          {alert.severity}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-medium ${
                            alert.status === "Active"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {alert.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {alert.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {alert.status === "Active" && (
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="flex items-center border px-2 py-1 rounded text-sm hover:bg-gray-100"
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Resolve
                      </button>
                    )}
                    <button
                      onClick={() => dismissAlert(alert.id)}
                      className="border px-2 py-1 rounded hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Extra info */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Response Team</p>
                      <p className="font-medium">{alert.responders}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">ETA</p>
                      <p className="font-medium">{alert.eta}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Protocols */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b px-4 py-2 font-semibold">Emergency Protocols</div>
          <div className="p-4 space-y-3">
            <button className="w-full flex items-center border px-3 py-2 rounded hover:bg-gray-100">
              <Siren className="h-4 w-4 mr-2 text-red-500" />
              Activate Emergency Vehicle Priority
            </button>
            <button className="w-full flex items-center border px-3 py-2 rounded hover:bg-gray-100">
              <AlertTriangle className="h-4 w-4 mr-2 text-yellow-600" />
              Clear All Traffic Signals
            </button>
            <button className="w-full flex items-center border px-3 py-2 rounded hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2 text-blue-500" />
              Contact Emergency Services
            </button>
            <button className="w-full flex items-center border px-3 py-2 rounded hover:bg-gray-100">
              <MapPin className="h-4 w-4 mr-2 text-green-500" />
              Broadcast Traffic Diversion
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white shadow rounded-lg">
          <div className="border-b px-4 py-2 font-semibold">Alert Statistics</div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between">
              <span>Today's Alerts</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Active</span>
              <span className="font-medium text-red-600">{activeAlerts.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Resolved</span>
              <span className="font-medium text-green-600">
                {alerts.filter((a) => a.status === "Resolved").length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Avg Response Time</span>
              <span className="font-medium">4.2 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
