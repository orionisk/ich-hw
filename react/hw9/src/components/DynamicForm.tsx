import { useForm } from 'react-hook-form';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  firstField: z.string().min(3, 'Минимальная длина 3 символа'),
  secondField: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function DynamicForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstField: '',
      secondField: ''
    }
  });

  const firstFieldValue = form.watch('firstField');
  const showSecondField = firstFieldValue.length >= 3;

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Card className='w-full max-w-md p-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            control={form.control}
            name='firstField'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Первое поле</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {showSecondField && (
            <FormField
              control={form.control}
              name='secondField'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Второе поле</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type='submit' className='w-full'>
            Отправить
          </Button>
        </form>
      </Form>
    </Card>
  );
}
