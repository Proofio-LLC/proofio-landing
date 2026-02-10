'use client';

import { createContext, useContext } from 'react';

type LocaleContextValue = {
  locale?: string;
  messages?: any;
};

const LocaleContext = createContext<LocaleContextValue>({});

export function LocaleProvider({
  locale,
  messages,
  children,
}: {
  locale?: string;
  messages?: any;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ locale, messages }}>{children}</LocaleContext.Provider>;
}

export function useLocaleContext() {
  return useContext(LocaleContext);
}

