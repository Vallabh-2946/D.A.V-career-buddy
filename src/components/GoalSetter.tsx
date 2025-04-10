
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CareerPath, WeeklyGoal } from '@/data/careerPaths';
import { Plus, Clock, Calendar, Bell } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface GoalSetterProps {
  career: CareerPath;
  updateCareer: (updatedCareer: CareerPath) => void;
}

const GoalSetter = ({ career, updateCareer }: GoalSetterProps) => {
  const [newGoal, setNewGoal] = useState('');
  const { toast } = useToast();
  
  const toggleGoalCompletion = (goalId: number) => {
    const updatedGoals = career.weeklyGoals.map(goal => 
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
    );
    
    updateCareer({
      ...career,
      weeklyGoals: updatedGoals
    });
    
    // Show toast when goal is completed
    const goal = career.weeklyGoals.find(g => g.id === goalId);
    if (goal && !goal.completed) {
      toast({
        title: "Goal completed! 🎉",
        description: `You've completed: ${goal.description}`,
      });
    }
  };

  const addNewGoal = () => {
    if (!newGoal.trim()) return;
    
    const newGoalObj: WeeklyGoal = {
      id: Math.max(0, ...career.weeklyGoals.map(g => g.id)) + 1,
      description: newGoal,
      completed: false
    };
    
    updateCareer({
      ...career,
      weeklyGoals: [...career.weeklyGoals, newGoalObj]
    });
    
    setNewGoal('');
    
    toast({
      title: "New goal added",
      description: "Keep up the momentum with your learning journey!",
    });
  };

  const completedGoals = career.weeklyGoals.filter(goal => goal.completed);
  const pendingGoals = career.weeklyGoals.filter(goal => !goal.completed);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Weekly Goals</h2>
      
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                This Week's Goals
              </CardTitle>
              <CardDescription>
                Track your progress on this week's learning goals
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {pendingGoals.length === 0 && completedGoals.length === 0 && (
                <p className="text-center py-6 text-muted-foreground">
                  No goals set yet. Add some goals to get started!
                </p>
              )}
              
              {pendingGoals.length > 0 && (
                <div className="space-y-4">
                  <h3 className="font-medium text-sm">Pending Goals</h3>
                  {pendingGoals.map(goal => (
                    <div key={goal.id} className="flex items-start space-x-3">
                      <Checkbox 
                        id={`goal-${goal.id}`} 
                        checked={goal.completed}
                        onCheckedChange={() => toggleGoalCompletion(goal.id)}
                      />
                      <Label 
                        htmlFor={`goal-${goal.id}`}
                        className="text-sm cursor-pointer"
                      >
                        {goal.description}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
              
              {completedGoals.length > 0 && (
                <div className="space-y-4 mt-6">
                  <Separator />
                  <h3 className="font-medium text-sm pt-2">Completed Goals</h3>
                  {completedGoals.map(goal => (
                    <div key={goal.id} className="flex items-start space-x-3">
                      <Checkbox 
                        id={`goal-${goal.id}`} 
                        checked={goal.completed}
                        onCheckedChange={() => toggleGoalCompletion(goal.id)}
                      />
                      <Label 
                        htmlFor={`goal-${goal.id}`}
                        className="text-sm line-through text-muted-foreground cursor-pointer"
                      >
                        {goal.description}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              <div className="flex w-full gap-2">
                <Input 
                  placeholder="Add a new goal..."
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') addNewGoal();
                  }}
                />
                <Button onClick={addNewGoal} disabled={!newGoal.trim()}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-5 w-5 text-primary" />
                Reminders
              </CardTitle>
              <CardDescription>
                Set reminders to stay on track
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>Daily Check-in</span>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <span>Weekly Review</span>
                  </div>
                  <Button variant="outline" size="sm">Enable</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Progress Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Goals Completed</span>
                  <span className="font-medium">{completedGoals.length}/{career.weeklyGoals.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Completion Rate</span>
                  <span className="font-medium">
                    {career.weeklyGoals.length > 0
                      ? Math.round((completedGoals.length / career.weeklyGoals.length) * 100)
                      : 0}%
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GoalSetter;
