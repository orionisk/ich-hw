import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { TextContent } from './components/TextContent';

function App() {
  return (
    <LanguageProvider>
      <div className='min-h-screen bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-16'>
          <div className='flex flex-col items-center space-y-8'>
            <TextContent />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
