import { AiOutlineLoading3Quarters, AiOutlineCopy } from 'react-icons/ai';
import Button from '../components/Button';
import { useLanguageStore } from '../stores/useLanguage';
import { useCopy } from '../hooks/useCopy';

export default function EditorFooter() {
  const [content, selectedLanguage] = useLanguageStore((state) => [
    state.content,
    state.selectedLanguage,
  ]);
  const [loading, copyToClipboard] = useCopy();

  function handleCopyClick() {
    copyToClipboard(content[selectedLanguage.value]);
  }

  return (
    <footer className='bg-editor-primary'>
      <div className='mx-auto max-w-7xl py-4 px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          <Button onClick={handleCopyClick} disabled={loading}>
            {loading ? (
              <AiOutlineLoading3Quarters className='icon-spin' />
            ) : (
              <AiOutlineCopy />
            )}
            <span>{loading ? 'Copying' : 'Copy to Clipboard'}</span>
          </Button>
        </div>
        <div className='mt-8 md:order-1 md:mt-0'>
          <a
            href='https://www.linkedin.com/in/onur-ayd%C4%B1n-88b831131/'
            rel='noreferrer'
            target='_blank'
            className='leading-5 hover:text-gray-200'
          >
            Online Code Editor
          </a>
        </div>
      </div>
    </footer>
  );
}
