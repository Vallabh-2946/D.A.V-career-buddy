
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CareerPath, Resource } from '@/data/careerPaths';
import { Calendar, ExternalLink, BookOpen, Play } from 'lucide-react';

interface LearningPathProps {
  career: CareerPath;
}

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <Card className="mb-3 card-hover">
    <CardContent className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium">{resource.title}</h4>
          <p className="text-sm text-muted-foreground">{resource.description}</p>
          <div className="flex items-center text-sm mt-2">
            <BookOpen className="h-3 w-3 mr-1" /> {resource.provider}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <Badge className={resource.type === 'free' ? 'bg-green-500' : 'bg-blue-500'}>
            {resource.type === 'free' ? 'Free' : 'Paid'}
          </Badge>
          <Button variant="ghost" size="sm" className="mt-2 h-8 px-2" asChild>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-3 w-3 mr-1" /> View
            </a>
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const LearningPath = ({ career }: LearningPathProps) => {
  const [activeMonth, setActiveMonth] = useState("1");

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">{career.title} Learning Path</h2>
          <p className="text-muted-foreground">A customized roadmap to help you grow</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2 self-start">
          <Calendar className="h-4 w-4" /> View Full Roadmap
        </Button>
      </div>

      <Tabs defaultValue={activeMonth} onValueChange={setActiveMonth} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          {career.learningPath.map((month) => (
            <TabsTrigger key={month.month} value={month.month.toString()}>
              Month {month.month}
            </TabsTrigger>
          ))}
        </TabsList>

        {career.learningPath.map((month) => (
          <TabsContent key={month.month} value={month.month.toString()} className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-primary" />
                  Month {month.month}: {month.focus}
                </CardTitle>
                <CardDescription>
                  Recommended resources to help you master this month's focus area
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-3">Free Resources</h3>
                  {month.resources.filter(r => r.type === 'free').map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Premium Resources</h3>
                  {month.resources.filter(r => r.type === 'paid').map((resource, idx) => (
                    <ResourceCard key={idx} resource={resource} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default LearningPath;
