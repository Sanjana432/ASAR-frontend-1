import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, Clock, MapPin, AlertTriangle } from 'lucide-react';

export function TrafficPrediction() {
  const hourlyTrafficData = [
    { time: '00:00', volume: 45, prediction: 52 },
    { time: '02:00', volume: 23, prediction: 28 },
    { time: '04:00', volume: 31, prediction: 35 },
    { time: '06:00', volume: 189, prediction: 195 },
    { time: '08:00', volume: 423, prediction: 445 },
    { time: '10:00', volume: 287, prediction: 295 },
    { time: '12:00', volume: 356, prediction: 372 },
    { time: '14:00', volume: 398, prediction: 410 },
    { time: '16:00', volume: 445, prediction: 463 },
    { time: '18:00', volume: 512, prediction: 528 },
    { time: '20:00', volume: 334, prediction: 345 },
    { time: '22:00', volume: 178, prediction: 185 },
  ];

  const junctionPredictions = [
    { name: 'Main St & 1st Ave', current: 245, predicted: 289, change: '+18%', risk: 'Medium' },
    { name: 'Highway 101 Exit', current: 156, predicted: 198, change: '+27%', risk: 'High' },
    { name: 'Mall Intersection', current: 89, predicted: 102, change: '+15%', risk: 'Low' },
    { name: 'Downtown Plaza', current: 203, predicted: 187, change: '-8%', risk: 'Low' },
  ];

  const congestionDistribution = [
    { name: 'Low', value: 45, color: '#22c55e' },
    { name: 'Medium', value: 35, color: '#eab308' },
    { name: 'High', value: 20, color: '#ef4444' },
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              24-Hour Traffic Prediction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyTrafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="volume" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Current Volume"
                />
                <Line 
                  type="monotone" 
                  dataKey="prediction" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Predicted Volume"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Congestion Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={congestionDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                >
                  {congestionDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {congestionDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Junction Predictions (Next 2 Hours)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {junctionPredictions.map((junction, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{junction.name}</h3>
                  <Badge className={getRiskColor(junction.risk)}>
                    {junction.risk} Risk
                  </Badge>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Current</p>
                    <p className="font-medium">{junction.current} vehicles</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Predicted</p>
                    <p className="font-medium">{junction.predicted} vehicles</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Change</p>
                    <p className={`font-medium ${junction.change.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                      {junction.change}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Action</p>
                    <p className="font-medium">
                      {junction.risk === 'High' ? 'Signal Adjust' : junction.risk === 'Medium' ? 'Monitor' : 'Normal'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">Prediction Accuracy</p>
              <p className="text-2xl font-semibold">94.2%</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground">Next Update</p>
              <p className="text-2xl font-semibold">15m</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm text-muted-foreground">Risk Areas</p>
              <p className="text-2xl font-semibold">3</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-muted-foreground">Monitored Points</p>
              <p className="text-2xl font-semibold">127</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
