import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Camera, Video, Eye, MapPin, Activity } from 'lucide-react';

export function JunctionList() {
  const junctions = [
    {
      id: 1,
      name: 'Main St & 1st Ave',
      cameras: 4,
      activeFeeds: 4,
      status: 'Online',
      lastActivity: '2 mins ago',
      incidents: 0,
      trafficFlow: 'Normal'
    },
    {
      id: 2,
      name: 'Highway 101 & Oak St',
      cameras: 6,
      activeFeeds: 5,
      status: 'Online',
      lastActivity: '1 min ago',
      incidents: 1,
      trafficFlow: 'Heavy'
    },
    {
      id: 3,
      name: 'Park Ave & Center St',
      cameras: 3,
      activeFeeds: 2,
      status: 'Maintenance',
      lastActivity: '45 mins ago',
      incidents: 0,
      trafficFlow: 'Light'
    },
    {
      id: 4,
      name: 'Downtown Plaza',
      cameras: 8,
      activeFeeds: 8,
      status: 'Online',
      lastActivity: '30 secs ago',
      incidents: 0,
      trafficFlow: 'Normal'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Online': return 'bg-green-500';
      case 'Maintenance': return 'bg-yellow-500';
      case 'Offline': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrafficFlowColor = (flow) => {
    switch (flow) {
      case 'Light': return 'text-green-600';
      case 'Normal': return 'text-blue-600';
      case 'Heavy': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Junction Monitoring & Camera Feeds
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {junctions.map((junction) => (
              <div key={junction.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-medium flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {junction.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">Junction ID: {junction.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(junction.status)}`}></div>
                    <Badge variant={junction.status === 'Online' ? 'default' : 'secondary'}>
                      {junction.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Camera className="h-5 w-5 mx-auto mb-1 text-blue-500" />
                    <p className="text-sm text-muted-foreground">Cameras</p>
                    <p className="font-medium">{junction.cameras}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Video className="h-5 w-5 mx-auto mb-1 text-green-500" />
                    <p className="text-sm text-muted-foreground">Active Feeds</p>
                    <p className="font-medium">{junction.activeFeeds}/{junction.cameras}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Activity className="h-5 w-5 mx-auto mb-1 text-purple-500" />
                    <p className="text-sm text-muted-foreground">Traffic Flow</p>
                    <p className={`font-medium ${getTrafficFlowColor(junction.trafficFlow)}`}>
                      {junction.trafficFlow}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <Badge variant={junction.incidents > 0 ? 'destructive' : 'default'} className="w-full">
                      {junction.incidents} Incidents
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Last activity: {junction.lastActivity}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Feeds
                    </Button>
                    <Button size="sm" variant="outline">
                      <Camera className="h-4 w-4 mr-2" />
                      Camera Settings
                    </Button>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Camera className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">Total Cameras</p>
              <p className="text-2xl font-semibold">21</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground">Active Feeds</p>
              <p className="text-2xl font-semibold">19</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Activity className="h-8 w-8 mx-auto mb-2 text-orange-500" />
              <p className="text-sm text-muted-foreground">Recording</p>
              <p className="text-2xl font-semibold">21</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
