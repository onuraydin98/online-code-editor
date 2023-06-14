import EditorFooter from '../containers/EditorFooter';
import EditorHeader from '../containers/EditorHeader';
import type { PropsWithChildren } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col flex-1 h-screen text-editor-light text-sm font-sans text-center md:text-base'>
      <EditorHeader />
      <main className='flex flex-1 bg-editor-dark items-center justify-center'>
        {children}
      </main>
      <EditorFooter />
    </div>
  );
}
