import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { getLocalizeLabel } from '../../../utils/localize';
import { FooterWrapper } from '../styles/FooterWrapper';

export const FooterArea = () => {
  const locale = useSelector(({ settings }: RootState) => settings.locale);
  const localizeText = useCallback(
    (text) => getLocalizeLabel(locale, text),
    [locale]
  );
  return <FooterWrapper>footer area</FooterWrapper>;
};
