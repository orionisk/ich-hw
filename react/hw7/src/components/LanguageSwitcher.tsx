import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <Button
      onClick={toggleLanguage}
      className='bg-primary hover:bg-primary/90 text-2xl'
    >
      {t('switchLanguage')}
    </Button>
  );
}
