import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import Snapchat from '@/assets/snapchat.svg?react';
import Facebook from '@/assets/facebook.svg?react';
import X from '@/assets/x.svg?react';

const Contacts = () => {
  return (
    <section className=''>
      <h1 className='text-3xl md:text-4xl font-bold'>Контакты</h1>

      <div className='bg-[#EAEAEA] w-full h-[1px] mt-6 md:mt-8'></div>

      <ul className='flex flex-col mt-16 md:mt-32 text-black/50 opacity-80 text-base md:text-lg list-disc list-inside'>
        <li className='marker:text-black/50 marker:text-sm'>8 800 000 00 00</li>
        <li className='marker:text-black/50 marker:text-sm'>
          emailexample@email.com
        </li>
      </ul>

      <div className='grid grid-cols-1 lg:grid-cols-[1.33fr,1fr] gap-8 md:gap-20 mt-8 md:mt-16'>
        <form className='flex flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col md:flex-row gap-4 lg:gap-8'>
            <Input
              type='email'
              placeholder='Ваш email'
              className='bg-neutral-50 text-base md:text-lg text-black/50 py-6 md:py-8 px-4 md:px-5 rounded-lg'
            />
            <Input
              type='text'
              placeholder='Ваше имя'
              className='bg-neutral-50 text-base md:text-lg text-black/50 py-6 md:py-8 px-4 md:px-5 rounded-lg'
            />
          </div>
          <Textarea
            placeholder='Введите сообщение'
            className='min-h-[100px] bg-neutral-50 text-base md:text-lg text-black/50 py-5 md:py-7 px-4 md:px-5 rounded-lg'
          />
          <Button
            type='submit'
            className='w-fit bg-black text-white hover:bg-black/90 self-end py-3 lg:py-7 rounded-lg px-3 lg:px-6 text-sm'
          >
            Отправить
          </Button>
        </form>

        <div className='grid place-content-start justify-center pr-4 md:pr-32 py-3'>
          <h2 className='text-lg md:text-xl font-semibold mb-4 text-center'>
            Найдите нас:
          </h2>
          <div className='flex gap-4 md:gap-5 lg:gap-10 mt-4 justify-center'>
            <a href='#'>
              <Snapchat className='size-12 md:size-16 lg:size-20' />
            </a>
            <a href='#'>
              <Facebook className='size-12 md:size-16 lg:size-20' />
            </a>
            <a href='#'>
              <X className='size-12 md:size-16 lg:size-20' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
