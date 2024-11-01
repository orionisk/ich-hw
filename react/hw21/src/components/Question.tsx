import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { answerQuestion } from '@/features/questionnaire/questionnaireSlice';
import { Question as QuestionType } from '@/features/questionnaire/types';

interface QuestionProps {
  question: QuestionType;
}

export function Question({ question }: QuestionProps) {
  const dispatch = useDispatch();
  const { answers } = useSelector((state: RootState) => state.questionnaire);

  const answer = answers.find(a => a.questionId === question.id);

  return (
    <Card className='mb-4'>
      <CardHeader className='text-lg font-semibold'>{question.text}</CardHeader>
      <CardContent>
        <RadioGroup
          key={answers.length}
          value={answer?.value?.toString()}
          onValueChange={value =>
            dispatch(
              answerQuestion({
                questionId: question.id,
                value: value === 'true'
              })
            )
          }
          className='space-y-4'
        >
          <div className='flex items-center space-x-3'>
            <RadioGroupItem
              value='true'
              id={`q${question.id}-yes`}
              className='w-6 h-6'
            />
            <Label htmlFor={`q${question.id}-yes`} className='text-lg'>
              Да
            </Label>
          </div>
          <div className='flex items-center space-x-3'>
            <RadioGroupItem
              value='false'
              id={`q${question.id}-no`}
              className='w-6 h-6'
            />
            <Label htmlFor={`q${question.id}-no`} className='text-lg'>
              Нет
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}
