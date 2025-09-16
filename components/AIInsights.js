import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Brain, 
  Lightbulb, 
  TrendingUp, 
  AlertCircle, 
  Target, 
  Zap,
  CheckCircle,
  Clock
} from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      id: 1,
      type: 'Optimization',
      priority: 'High',
      title: 'Signal Timing Optimization Opportunity',
      description: 'AI analysis suggests reducing signal timing at Main St & 1st Ave by 15 seconds during off-peak hours could improve flow by 23%',
      impact: 'High',
      confidence: 94,
      implementation: 'Automatic',
      status: 'Pending',
      icon: Target
    },
    {
      id: 2,
      type: 'Prediction',
      priority: 'Medium',
      title: 'Rush Hour Pattern Change Detected',
      description: 'Traffic patterns show a 2-hour shift in evening rush hour over the past month. Recommend adjusting signal schedules accordingly.',
      impact: 'Medium',
      confidence: 87,
      implementation: 'Manual Review',
      status: 'New',
      icon: TrendingUp
    },
    {
      id: 3,
      type: 'Alert',
      priority: 'High',
      title: 'Potential Congestion Hotspot',
      description: 'ML models predict Highway 101 & Oak St will experience severe congestion in next 45 minutes based on current patterns.',
      impact: 'High',
      confidence: 91,
      implementation: 'Immediate',
      status: 'Action Required',
      icon: AlertCircle
    },
    {
      id: 4,
      type: 'Efficiency',
      priority: 'Low',
      title: 'Camera Positioning Recommendation',
      description: 'Computer vision analysis suggests repositioning camera at Junction 4 could improve incident detection by 15%.',
      impact: 'Low',
      confidence: 78,
      implementation: 'Scheduled',
      status: 'Implemented',
      icon: CheckCircle
    },
  ];

  const recommendations = [
    {
      title: 'Implement Adaptive Signal Control',
      description: 'Deploy AI-driven adaptive signals at 5 high-traffic intersections',
      expectedBenefit: '30% reduction in wait times',
      effort: 'High',
      timeline: '3-6 months'
    },
    {
      title: 'Enhance Predictive Analytics',
      description: 'Integrate weather and event data into traffic prediction models',
      expectedBenefit: '15% improvement in prediction accuracy',
      effort: 'Medium',
      timeline: '1-2 months'
    },
    {
      title: 'Emergency Response Optimization',
      description: 'Use ML to optimize emergency vehicle routing and signal preemption',
      expectedBenefit: '25% faster emergency response',
      effort: 'Medium',
      timeline: '2-4 months'
    },
  ];

  const modelPerformance = [
    { model: 'Traffic Prediction', accuracy: 94.2, status: 'Excellent' },
    { model: 'Incident Detection', accuracy: 89.7, status: 'Good' },
    { model: 'Flow Optimization', accuracy: 91.3, status: 'Excellent' },
    { model: 'Emergency Response', accuracy: 87.5, status: 'Good' },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'default';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Action Required': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Implemented': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 90) return 'text-green-600';
    if (accuracy >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI-Powered Traffic Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => {
              const Icon = insight.icon;
              return (
                <div key={insight.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <Icon className="h-5 w-5 mt-1 text-blue-600" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium">{insight.title}</h3>
                          <Badge variant={getPriorityColor(insight.priority)}>
                            {insight.priority}
                          </Badge>
                          <Badge className={getStatusColor(insight.status)}>
                            {insight.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          {insight.description}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Impact</p>
                            <p className="font-medium">{insight.impact}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Confidence</p>
                            <div className="flex items-center space-x-2">
                              <Progress value={insight.confidence} className="w-16 h-2" />
                              <span className="font-medium">{insight.confidence}%</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Implementation</p>
                            <p className="font-medium">{insight.implementation}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Type</p>
                            <p className="font-medium">{insight.type}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {insight.status === 'Action Required' && (
                        <Button size="sm">
                          Implement
                        </Button>
                      )}
                      {insight.status === 'Pending' && (
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Benefit</p>
                      <p className="font-medium text-green-600">{rec.expectedBenefit}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Effort</p>
                      <p className="font-medium">{rec.effort}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Timeline</p>
                      <p className="font-medium">{rec.timeline}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modelPerformance.map((model, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{model.model}</p>
                    <p className="text-sm text-muted-foreground">{model.status}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${getAccuracyColor(model.accuracy)}`}>
                      {model.accuracy}%
                    </p>
                    <Progress value={model.accuracy} className="w-20 h-2 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Brain className="h-8 w-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">Active Models</p>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Lightbulb className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
              <p className="text-sm text-muted-foreground">Daily Insights</p>
              <p className="text-2xl font-semibold">47</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p className="text-sm text-muted-foreground">Optimizations</p>
              <p className="text-2xl font-semibold">156</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-purple-500" />
              <p className="text-sm text-muted-foreground">Processing Time</p>
              <p className="text-2xl font-semibold">2.3s</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
