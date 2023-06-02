import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';

import theme from 'theme';

const useMediaHook = () => {
  const [MediaType, setMediaType] = useState(null);

  const isMobile = useMedia(theme.mediaBreakpoints.mobile.media);

  const isTablet = useMedia(theme.mediaBreakpoints.tablet.media);

  const isDesktop = useMedia(theme.mediaBreakpoints.desktop.media);

  useEffect(() => {
    if (isMobile) {
      setMediaType('mobile');
    }

    if (isTablet) {
      setMediaType('tablet');
    }

    if (isDesktop) {
      setMediaType('desktop');
    }
  }, [isDesktop, isMobile, isTablet]);

  return { MediaType };
};

export default useMediaHook;
