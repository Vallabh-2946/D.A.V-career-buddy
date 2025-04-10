
import { useState } from 'react';
import { ChevronRight, ChevronLeft, SendHorizontal } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { quizQuestions } from '@/data/quizQuestions';

interface CareerQuizProps {
  onComplete: (answers: Record<number, string>) => void;
}

const CareerQuiz = ({ onComplete }: CareerQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleNextQuestion = () => {
    if (currentAnswer) {
      // Save the current answer
      setAnswers({ ...answers, [currentQuestion.id]: currentAnswer });
      
      // Clear current answer for next question
      setCurrentAnswer("");
      
      // If it's the last question, complete the quiz
      if (isLastQuestion) {
        const finalAnswers = { ...answers, [currentQuestion.id]: currentAnswer };
        onComplete(finalAnswers);
      } else {
        // Move to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentAnswer(answers[quizQuestions[currentQuestionIndex - 1].id] || "");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm font-medium">
            {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-500" 
            style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="p-6 shadow-md animate-fade-in">
        <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
        
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <RadioGroup
            value={currentAnswer}
            onValueChange={setCurrentAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, i) => (
              <div key={i} className="flex items-center space-x-2 rounded-lg p-2 hover:bg-muted/50 transition-colors">
                <RadioGroupItem value={option} id={`option-${i}`} />
                <Label htmlFor={`option-${i}`} className="flex-1 cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )}
        
        {currentQuestion.type === 'open-ended' && (
          <div className="mt-4">
            <div className="flex">
              <Input
                placeholder="Type your answer here..."
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="flex-1"
              />
              <Button
                size="icon"
                variant="ghost"
                className="ml-2"
                onClick={handleNextQuestion}
                disabled={!currentAnswer}
              >
                <SendHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevQuestion}
            disabled={isFirstQuestion}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </Button>

          {currentQuestion.type === 'multiple-choice' && (
            <Button
              onClick={handleNextQuestion}
              disabled={!currentAnswer}
              className="flex items-center gap-2"
            >
              {isLastQuestion ? 'Finish' : 'Next'} <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CareerQuiz;
