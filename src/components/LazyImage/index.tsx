import NextImage, { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

import webp_sigpwnylogo from '@/stories/assets/sigpwnylogo.png.webp';
import webp_sigchilogo from '@/stories/assets/sigchilogo.png.webp';
import webp_gamebuildlogo from '@/stories/assets/gamebuildlogo.png.webp';
import webp_sigaidalogo from '@/stories/assets/sigaidalogo.png.webp';
import webp_siggraphlogo from '@/stories/assets/siggraphlogo.png.webp';
import webp_icpclogo from '@/stories/assets/icpclogo.png.webp';
import webp_sigmobilelogo from '@/stories/assets/sigmobilelogo.png.webp';
import webp_sigmusiclogo from '@/stories/assets/sigmusiclogo.png.webp';
import webp_gluglogo from '@/stories/assets/gluglogo.png.webp';
import webp_signlllogo from '@/stories/assets/signll_logo.png.webp';
import webp_sigmalogo from '@/stories/assets/sigmalogo.png.webp';
import webp_quiuclogo from '@/stories/assets/quiuclogo.png.webp';
import webp_sigecomlogo from '@/stories/assets/sigecomlogo.png.webp';
import webp_sigplanlogo from '@/stories/assets/sigplanlogo.png.webp';
import webp_sigpolicylogo from '@/stories/assets/sigpolicylogo.png.webp';
import webp_sigarchlogo from '@/stories/assets/sigarchlogo.png.webp';

// fallback to png if the browser doesn't support webp images.
import sigpwnylogo from '@/stories/assets/sigpwnylogo.png';
import sigchilogo from '@/stories/assets/sigchilogo.png';
import gamebuildlogo from '@/stories/assets/gamebuildlogo.png';
import sigaidalogo from '@/stories/assets/sigaidalogo.png';
import siggraphlogo from '@/stories/assets/siggraphlogo.png';
import icpclogo from '@/stories/assets/icpclogo.png';
import sigmobilelogo from '@/stories/assets/sigmobilelogo.png';
import sigmusiclogo from '@/stories/assets/sigmusiclogo.png';
import gluglogo from '@/stories/assets/gluglogo.png';
import signlllogo from '@/stories/assets/signll_logo.png';
import sigmalogo from '@/stories/assets/sigmalogo.png';
import quiuclogo from '@/stories/assets/quiuclogo.png';
import sigecomlogo from '@/stories/assets/sigecomlogo.png';
import sigplanlogo from '@/stories/assets/sigplanlogo.png';
import sigpolicylogo from '@/stories/assets/sigpolicylogo.png';
import sigarchlogo from '@/stories/assets/sigarchlogo.png';

import acmlogo from '@/stories/assets/acm-square-blue.png';

export const SIGList = ['SIGPwny' , 'SIGCHI' , 'GameBuilders' , 'SIGAIDA' , 'SIGGRAPH' 
, 'ICPC' , 'SIGMobile' , 'SIGMusic' , 'GLUG' , 'SIGNLL' , 'SIGma' , 'SIGQuantum' , 'SIGecom' , 'SIGPLAN' , 'SIGPolicy' , 'SIGARCH']

export const OrganizationList = [...SIGList, 'ACM'] as const;

export type SIG = typeof SIGList[number];
export type Organization = typeof OrganizationList[number];

export interface LazyImageProps {
  img: StaticImageData
  imgwebp?: StaticImageData
  title: string
  className: string
};

export const LazyImage = ({ img, imgwebp, title, className }: LazyImageProps) => {
  if (!imgwebp) {
    return <NextImage
      className={className}
      src={img}
      alt={title + " Logo"}
      loading="lazy"
    />
  }

  return <picture>
  <source type="image/webp" srcSet={imgwebp as unknown as string} />
  <NextImage
    className={className}
    src={img}
    alt={title + " Logo"}
    loading="lazy"
  />
  </picture>
}

const imageRenderers : {
  [key in Organization]: (className: string) => ReactElement
} = {
  'SIGPwny' : (className) => <LazyImage img={sigpwnylogo} imgwebp={webp_sigpwnylogo} title="SIGPwny" className={className} />,
  'SIGCHI' : (className) => <LazyImage img={sigchilogo} imgwebp={webp_sigchilogo} title="SIGCHI" className={className} />,
  'GameBuilders' : (className) => <LazyImage img={gamebuildlogo} imgwebp={webp_gamebuildlogo} title="GameBuilders" className={className} />,
  'SIGAIDA' : (className) => <LazyImage img={sigaidalogo} imgwebp={webp_sigaidalogo} title="SIGAIDA" className={className} />,
  'SIGGRAPH' : (className) => <LazyImage img={siggraphlogo} imgwebp={webp_siggraphlogo} title="SIGGRAPH" className={className} />,
  'ICPC' : (className) => <LazyImage img={icpclogo} imgwebp={webp_icpclogo} title="ICPC" className={className} />,
  'SIGMobile' : (className) => <LazyImage img={sigmobilelogo} imgwebp={webp_sigmobilelogo} title="SIGMobile" className={className} />,
  'SIGMusic' : (className) => <LazyImage img={sigmusiclogo} imgwebp={webp_sigmusiclogo} title="SIGMusic" className={className} />,
  'GLUG' : (className) => <LazyImage img={gluglogo} imgwebp={webp_gluglogo} title="GLUG" className={className} />,
  'SIGNLL': (className) => <LazyImage img={signlllogo} imgwebp={webp_signlllogo} title="SIGNLL" className={className} />,
  'SIGma': (className) => <LazyImage img={sigmalogo} imgwebp={webp_sigmalogo} title="SIGma" className={className} />,
  'SIGQuantum': (className) => <LazyImage img={quiuclogo} imgwebp={webp_quiuclogo} title="SIGQuantum" className={className} />,
  'SIGecom': (className) => <LazyImage img={sigecomlogo} imgwebp={webp_sigecomlogo} title="SIGecom" className={className} />,
  'SIGPLAN': (className) => <LazyImage img={sigplanlogo} imgwebp={webp_sigplanlogo} title="SIGPLAN" className={className} />,
  'SIGPolicy': (className) => <LazyImage img={sigpolicylogo} imgwebp={webp_sigpolicylogo} title="SIGPolicy" className={className} />,
  'SIGARCH': (className) => <LazyImage img={sigarchlogo} imgwebp={webp_sigarchlogo} title="SIGARCH" className={className} />,
  'ACM': (className) => <LazyImage img={acmlogo} title="ACM" className={className} />,
}

export const getOrganizationImage = (org: Organization, className: string = 'h-14 w-auto') => {
  return imageRenderers[org](className);
}