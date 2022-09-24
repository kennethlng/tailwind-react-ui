import { useRef } from 'react';
import { path } from 'ramda';

const canFocus = path(['current', 'focus']);

export default function useFocus(): [React.MutableRefObject<any>, () => void] {
  const htmlElRef = useRef<any>(null);

  const setFocus = () => {
    if (canFocus(htmlElRef)) {
      htmlElRef.current.focus();
    }
  };

  return [htmlElRef, setFocus];
}
