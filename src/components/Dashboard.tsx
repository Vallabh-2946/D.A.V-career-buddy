
import { useState } from 'react';
import { CareerPath } from '@/data/careerPaths';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Star, TrendingUp, Clock } from 'lucide-react';

interface DashboardProps {
  career: CareerPath;
}

const Dashboard = ({ career }: DashboardProps) => {
  const totalSkillsValue = career.skills.reduce((sum, skill) => sum + (skill.level || 0), 0);
  const averageCompletion = totalSkillsValue / (career.skills.length * 100) * 100;
  
  const getSkillLevelClass = (level: number = 0) => {
    if (level < 30) return 'bg-skill-low';
    if (level < 70) return 'bg-skill-medium';
    return 'bg-skill-high';
  };
  
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">
        Your {career.title} Skills Dashboard
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-muted-foreground" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.round(averageCompletion)}%</div>
            <p className="text-xs text-muted-foreground">Skills mastery</p>
            <div className="mt-2 progress-bar">
              <div 
                className="progress-value bg-primary" 
                style={{ width: `${averageCompletion}%` }}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Star className="mr-2 h-4 w-4 text-muted-foreground" />
              Skills Mastered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {career.skills.filter(s => (s.level || 0) >= 70).length}/{career.skills.length}
            </div>
            <p className="text-xs text-muted-foreground">Skills above 70% proficiency</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              Weekly Goals Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {career.weeklyGoals.filter(g => g.completed).length}/{career.weeklyGoals.length}
            </div>
            <p className="text-xs text-muted-foreground">Current week's goals completed</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Skill Progress</CardTitle>
          <CardDescription>Track your progress in key skills for this career path</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {career.skills.map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-medium">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  <Badge className={
                    (skill.level || 0) < 30 
                      ? 'bg-skill-low' 
                      : (skill.level || 0) < 70 
                        ? 'bg-skill-medium' 
                        : 'bg-skill-high'
                  }>
                    {skill.level || 0}%
                  </Badge>
                </div>
                <div className="progress-bar">
                  <div 
                    className={`progress-value ${getSkillLevelClass(skill.level)}`}
                    style={{ width: `${skill.level || 0}%` }}
                  />
                </div>
                {idx < career.skills.length - 1 && <Separator className="mt-4 mb-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
