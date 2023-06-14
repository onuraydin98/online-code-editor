import { IoRefresh } from 'react-icons/io5';
import Button from '../components/Button';
import ListBox from '../components/ListBox';
import { useLanguageStore } from '../stores/useLanguage';

export default function EditorHeader() {
  const [selectedLanguage, setSelectedLanguage, resetContent] =
    useLanguageStore((state) => [
      state.selectedLanguage,
      state.setSelectedLanguage,
      state.resetContent,
    ]);

  return (
    <header className='bg-editor-primary'>
      <nav
        className='mx-auto flex max-w-[96rem] items-center justify-between p-4 lg:px-8'
        aria-label='header'
      >
        <div className='flex lg:flex-1'>
          <ListBox
            selected={selectedLanguage}
            setSelected={setSelectedLanguage}
          />
        </div>
        <div className='flex flex-1 justify-end'>
          <Button onClick={resetContent} isNaked={true}>
            <IoRefresh />
            <p>Reset to initial code</p>
          </Button>
        </div>
      </nav>
    </header>
  );
}
