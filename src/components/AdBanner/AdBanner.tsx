import { AdImage } from '@/styles/AddBanner';

const AdBanner = () => {
  return (
    <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
      <AdImage
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="Advertisement"
      />
    </a>
  );
};

export default AdBanner;
