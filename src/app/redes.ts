export interface Redes {
  href: string;
  src: string;
  alt: string;
}

export interface RedesData {
  redes: {
    [key: string]: Redes;
  };
}
