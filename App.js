import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { CongestionMap } from './components/CongestionMap';
import { SignalControl } from './components/SignalControl';
import { JunctionList } from './components/JunctionList';
import { AnalyticsAndPrediction } from './components/AnalyticsAndPrediction';
import { EmergencyAlerts } from './components/EmergencyAlerts';
import { AIInsights } from './components/AIInsights';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './components/ui/sheet';
import { AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('congestion');
  const [showEmergencyAlerts, setShowEmergencyAlerts] = useState(false);
  const emergencyCount = 2; // Normally this comes from a backend or API

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'congestion':
        return <CongestionMap />;
      case 'signals':
        return <SignalControl />;
      case 'junctions':
        return <JunctionList />;
      case 'analytics':
        return <AnalyticsAndPrediction />;
      case 'ai':
        return <AIInsights />;
      default:
        return <CongestionMap />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        emergencyCount={emergencyCount}
        onEmergencyClick={() => setShowEmergencyAlerts(true)}
      />

      <main className="p-6">
        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>
      
      <Sheet open={showEmergencyAlerts} onOpenChange={setShowEmergencyAlerts}>
        <SheetContent className="w-[600px] sm:w-[800px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              Emergency Alerts
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <EmergencyAlerts />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
