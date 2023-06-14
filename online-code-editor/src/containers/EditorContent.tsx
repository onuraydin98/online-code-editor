import Editor from '@monaco-editor/react';
import { jsInitialValue } from '../constants/initial-codes';
import { languages } from '../constants/languages';
import { useLanguageStore } from '../stores/useLanguage';

export default function EditorContent() {
  const [content, selectedLanguage, setContent] = useLanguageStore((state) => [
    state.content,
    state.selectedLanguage,
    state.setContent,
  ]);

  // Buraya bak
  function handleEditorChange(content: string | undefined) {
    setContent(content ?? '');
  }

  return (
    <div className='w-[80%] h-[80%] mt-4'>
      <Editor
        width='100%'
        theme='vs-dark'
        defaultLanguage={languages[0].value}
        defaultValue={jsInitialValue}
        value={content[selectedLanguage.value]}
        language={selectedLanguage.value}
        onChange={handleEditorChange}
      />
    </div>
  );
}
