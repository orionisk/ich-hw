import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { Button } from './components/ui/button';
import { submitQuestionnaire } from './features/questionnaire/questionnaireSlice';

function App() {
  const dispatch = useDispatch();
  const { questions, answers, isSubmitted } = useSelector(
    (state: RootState) => state.questionnaire
  );

  const handleSubmit = () => {
    dispatch(submitQuestionnaire());
  };

  const isComplete = answers.length === questions.length;

  return (
    <div className='min-h-screen bg-background text-foreground p-4'>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-2xl font-bold mb-6'>Анкета</h1>

        {questions.map(question => (
          <Question key={question.id} question={question} />
        ))}

        {!isSubmitted && (
          <Button
            className='w-full mt-4'
            onClick={handleSubmit}
            disabled={!isComplete}
          >
            {isComplete ? 'Отправить' : 'Ответьте на все вопросы'}
          </Button>
        )}

        {isSubmitted && <Result />}
      </div>
    </div>
  );
}

export default App;
