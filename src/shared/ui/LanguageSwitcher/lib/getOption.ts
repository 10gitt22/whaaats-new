import { LanguageOption } from './options';

export const getOption = (options: LanguageOption[], locale: string) => {
  return options.find((option) => option.locale === locale);
};
