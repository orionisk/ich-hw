import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { resetQuestionnaire } from '@/features/questionnaire/questionnaireSlice';

export function Result() {
  const dispatch = useDispatch();
  const { score, questions } = useSelector(
    (state: RootState) => state.questionnaire
  );
  const percentage = (score / questions.length) * 100;

  return (
    <Card className='mt-6'>
      <CardHeader className='text-xl font-bold'>Результаты</CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <Progress value={percentage} className='w-full' />
          <p className='text-center'>
            Вы ответили положительно на {score} из {questions.length} вопросов (
            {Math.round(percentage)}%)
          </p>
          <Button
            className='w-full'
            onClick={() => dispatch(resetQuestionnaire())}
          >
            Пройти заново
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
