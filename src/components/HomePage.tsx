
import { Compass, BookOpen, BarChart3, Target, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface HomePageProps {
  onStartQuiz: () => void;
}

const HomePage = ({ onStartQuiz }: HomePageProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10 py-6">
      <div className="text-center space-y-4">
        <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4 inline-block mr-1" />
          AI-Powered Career Guidance
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Discover Your Perfect <span className="gradient-text">Tech Career</span> Path
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find the right career path, get personalized resources, and track your progress - all in one place.
        </p>
        <Button size="lg" className="mt-4" onClick={onStartQuiz}>
          Take the Career Quiz <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={Compass}
          title="Career Discovery"
          description="Find the perfect tech career match through our AI-powered quiz"
          color="from-purple-600 to-blue-600"
        />
        <FeatureCard 
          icon={BookOpen}
          title="Learning Paths"
          description="Get curated resources from free tutorials to premium courses"
          color="from-blue-600 to-cyan-600"
        />
        <FeatureCard 
          icon={BarChart3}
          title="Skills Tracking"
          description="Visualize your progress and stay motivated with skill dashboards"
          color="from-emerald-600 to-green-600"
        />
        <FeatureCard 
          icon={Target}
          title="Weekly Goals"
          description="Set achievable goals to make consistent progress each week"
          color="from-orange-600 to-red-600"
        />
      </div>
      
      <div className="bg-muted rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Ready to find your path?</h2>
            <p className="text-muted-foreground">Take our quick 5-minute quiz to discover your perfect tech career match.</p>
          </div>
          <Button size="lg" onClick={onStartQuiz}>
            Start the Quiz <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => (
  <Card className="card-hover">
    <CardContent className="p-6">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

export default HomePage;
