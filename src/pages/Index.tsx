
import { useState } from 'react';
import { NavBar } from '@/components/NavBar';
import CareerQuiz from '@/components/CareerQuiz';
import CareerSuggestions from '@/components/CareerSuggestions';
import LearningPath from '@/components/LearningPath';
import Dashboard from '@/components/Dashboard';
import GoalSetter from '@/components/GoalSetter';
import HomePage from '@/components/HomePage';
import { useToast } from '@/hooks/use-toast';
import { careerPaths, CareerPath } from '@/data/careerPaths';

const Index = () => {
  const [section, setSection] = useState<string>('home');
  const [selectedCareerId, setSelectedCareerId] = useState<string>('frontend');
  const [careers, setCareers] = useState<CareerPath[]>(careerPaths);
  const { toast } = useToast();

  // Function to handle quiz completion
  const handleQuizComplete = (answers: Record<number, string>) => {
    console.log('Quiz answers:', answers);
    
    // In a real app, we'd process these answers through an AI model
    // For this demo, we'll just show the careers with mock match percentages
    toast({
      title: "Quiz Complete!",
      description: "We've analyzed your responses and found your top career matches.",
    });
    
    setSection('suggestions');
  };

  // Function to view a specific career's learning path
  const viewLearningPath = (careerId: string) => {
    setSelectedCareerId(careerId);
    setSection('learning-path');
  };

  // Function to update career data (used by GoalSetter)
  const updateCareer = (updatedCareer: CareerPath) => {
    setCareers(careers.map(career => 
      career.id === updatedCareer.id ? updatedCareer : career
    ));
  };

  // Get the selected career
  const selectedCareer = careers.find(career => career.id === selectedCareerId) || careers[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-6">
        <h1 className="text-3xl font-bold mb-8 gradient-text">AI Career Buddy</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-6">
          {/* Navigation Sidebar */}
          <div>
            <NavBar activeSection={section} setActiveSection={setSection} />
          </div>
          
          {/* Main Content Area */}
          <div className="space-y-8">
            {section === 'home' && (
              <HomePage onStartQuiz={() => setSection('quiz')} />
            )}
            
            {section === 'quiz' && (
              <CareerQuiz onComplete={handleQuizComplete} />
            )}
            
            {section === 'suggestions' && (
              <CareerSuggestions 
                careers={careers} 
                onViewLearningPath={viewLearningPath} 
              />
            )}
            
            {section === 'learning-path' && (
              <LearningPath career={selectedCareer} />
            )}
            
            {section === 'dashboard' && (
              <Dashboard career={selectedCareer} />
            )}
            
            {section === 'goals' && (
              <GoalSetter 
                career={selectedCareer}
                updateCareer={updateCareer}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
