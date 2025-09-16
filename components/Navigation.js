import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Map, 
  Navigation as NavIcon, 
  Camera, 
  BarChart3, 
  Brain,
  Settings,
  AlertTriangle
} from 'lucide-react';

export function Navigation({ activeSection, onSectionChange, emergencyCount, onEmergencyClick }) {
  const navItems = [
    { id: 'congestion', label: 'Congestion Map', icon: Map },
    { id: 'signals', label: 'Signal Control', icon: NavIcon },
    { id: 'junctions', label: 'Junction List', icon: Camera },
    { id: 'analytics', label: 'Analytics & Prediction', icon: BarChart3 },
    { id: 'ai', label: 'AI Insights', icon: Brain },
  ];

  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <NavIcon className="h-8 w-8 text-primary" />
          <h1 className="text-xl font-semibold">ASAR</h1>
          <span className="text-sm text-muted-foreground">Traffic Management System</span>
        </div>
        
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onSectionChange(item.id)}
                className="relative"
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onEmergencyClick}
            className="relative bg-red-50 border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300"
          >
            <AlertTriangle className="h-4 w-4" />
            {emergencyCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {emergencyCount}
              </Badge>
            )}
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </nav>
  );
}
