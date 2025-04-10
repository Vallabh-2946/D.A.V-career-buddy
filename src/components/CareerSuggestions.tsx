
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { CareerPath } from '@/data/careerPaths';
import { ArrowRight, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

interface CareerSuggestionsProps {
  careers: CareerPath[];
  onViewLearningPath: (careerId: string) => void;
}

const CareerSuggestions = ({ careers, onViewLearningPath }: CareerSuggestionsProps) => {
  const [sortedCareers, setSortedCareers] = useState<CareerPath[]>([]);

  useEffect(() => {
    // Sort careers by match percentage if available
    const sorted = [...careers].sort((a, b) => {
      const matchA = a.match || 0;
      const matchB = b.match || 0;
      return matchB - matchA;
    });
    setSortedCareers(sorted);
  }, [careers]);

  // Add match percentages for demo (in real app, these would be calculated from quiz results)
  const demoMatches: Record<string, number> = {
    "frontend": 92,
    "data-science": 84,
    "ux-designer": 78
  };

  // Function to get demand icon and color
  const getDemandBadge = (demand: string) => {
    switch (demand) {
      case 'high':
        return <Badge className="bg-green-500">High Demand <TrendingUp className="ml-1 h-3 w-3" /></Badge>;
      case 'medium':
        return <Badge className="bg-orange-500">Medium Demand</Badge>;
      case 'low':
        return <Badge className="bg-red-500">Low Demand</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Your Career Matches</h2>
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {sortedCareers.map((career, index) => (
          <Card key={career.id} className={`card-hover overflow-hidden ${index === 0 ? 'border-primary border-2' : ''}`}>
            <div className={`h-2 w-full ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'}`} />
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{career.title}</CardTitle>
                  <CardDescription className="mt-1">{career.description}</CardDescription>
                </div>
                <div className="flex flex-col items-end">
                  {/* For demo, assign percentages */}
                  <span className="text-2xl font-bold gradient-text">{demoMatches[career.id]}%</span>
                  <span className="text-xs text-muted-foreground">match</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1" /> Salary Range</span>
                    {getDemandBadge(career.demand)}
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Entry: <span className="font-medium">{career.salary.entry}</span></p>
                    <p>Mid-career: <span className="font-medium">{career.salary.mid}</span></p>
                    <p>Senior: <span className="font-medium">{career.salary.senior}</span></p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium">Why this matches you:</h4>
                  <ul className="space-y-1">
                    {career.whyMatch?.map((reason, idx) => (
                      <li key={idx} className="text-sm flex">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  onClick={() => onViewLearningPath(career.id)}
                >
                  View Learning Path <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerSuggestions;
