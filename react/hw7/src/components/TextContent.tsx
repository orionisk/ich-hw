import { useLanguage } from '@/contexts/LanguageContext';

export function TextContent() {
  const { t } = useLanguage();

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>{t('title')}</h1>
      <p className='text-2xl text-gray-300'>{t('description')}</p>
    </div>
  );
}
