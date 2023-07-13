import { useEffect } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 밑에 닿지 않으면 return
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      // 스크롤이 밑에 닿으면 callback(requestmoreData)을 호출
      callback();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};
