import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Navigation as NavIcon, Play, Pause, RotateCcw, AlertCircle } from 'lucide-react';

export function SignalControl() {
  const [signals, setSignals] = useState([
    { id: 1, name: 'Main St & 1st Ave', status: 'Active', mode: 'Auto', timing: '45s', phase: 'Green' },
    { id: 2, name: 'Highway 101 & Oak St', status: 'Active', mode: 'Manual', timing: '30s', phase: 'Red' },
    { id: 3, name: 'Park Ave & Center St', status: 'Maintenance', mode: 'Off', timing: '--', phase: 'Yellow' },
    { id: 4, name: 'Downtown Plaza', status: 'Active', mode: 'Auto', timing: '60s', phase: 'Green' },
  ]);

  const [autoMode, setAutoMode] = useState(true);

  const toggleSignalMode = (id) => {
    setSignals(signals.map(signal => 
      signal.id === id 
        ? { ...signal, mode: signal.mode === 'Auto' ? 'Manual' : 'Auto' }
        : signal
    ));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <NavIcon className="h-5 w-5" />
              Signal Control Panel
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Auto Mode</span>
              <Switch checked={autoMode} onCheckedChange={setAutoMode} />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {signals.map((signal) => (
              <div key={signal.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-medium">{signal.name}</h3>
                    <p className="text-sm text-muted-foreground">Signal ID: {signal.id}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={signal.status === 'Active' ? 'default' : 'secondary'}
                      className={signal.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' : ''}
                    >
                      {signal.status}
                    </Badge>
                    <Badge variant="outline">{signal.mode}</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${
                        signal.phase === 'Green' ? 'bg-green-500' :
                        signal.phase === 'Red' ? 'bg-red-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="text-sm">{signal.phase}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Timer: {signal.timing}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {signal.status === 'Active' && (
                      <>
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Pause className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => toggleSignalMode(signal.id)}
                        >
                          {signal.mode === 'Auto' ? 'Manual' : 'Auto'}
                        </Button>
                      </>
                    )}
                    {signal.status === 'Maintenance' && (
                      <Button size="sm" variant="outline">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Repair
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Signals</span>
                <span className="font-medium">127</span>
              </div>
              <div className="flex justify-between">
                <span>Active</span>
                <span className="font-medium text-green-600">124</span>
              </div>
              <div className="flex justify-between">
                <span>Maintenance</span>
                <span className="font-medium text-yellow-600">3</span>
              </div>
              <div className="flex justify-between">
                <span>Offline</span>
                <span className="font-medium text-red-600">0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                Emergency Override All
              </Button>
              <Button className="w-full" variant="outline">
                Reset All Timers
              </Button>
              <Button className="w-full" variant="outline">
                Enable Rush Hour Mode
              </Button>
              <Button className="w-full" variant="outline">
                System Diagnostics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
