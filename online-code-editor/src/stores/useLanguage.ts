import { create } from 'zustand';
import { languages } from '../constants/languages';
import { javaInitialValue, jsInitialValue } from '../constants/initial-codes';
import type { TLanguages } from '../types/language';

type TLanguageStore = {
  content: TInitialContent;
  selectedLanguage: TLanguages;
  setSelectedLanguage: (language: TLanguages) => void;
  setContent: (value: string) => void;
  resetContent: () => void;
};

type TInitialContent = {
  [key: string]: string;
};

const initialContent: TInitialContent = {
  javascript: jsInitialValue,
  java: javaInitialValue,
};

// All state managements are done below

export const useLanguageStore = create<TLanguageStore>((set, get) => ({
  content: initialContent,
  selectedLanguage: languages[0],
  setSelectedLanguage: (language) =>
    set({
      selectedLanguage: language,
    }),
  setContent: (value) =>
    set((state) => {
      return {
        content: { ...state.content, [get().selectedLanguage.value]: value },
      };
    }),
  resetContent: () =>
    set((state) => {
      return {
        content: {
          ...state.content,
          [get().selectedLanguage.value]:
            initialContent[get().selectedLanguage.value],
        },
      };
    }),
}));
