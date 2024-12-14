export interface MetodosPago {
  src: string;
  alt: string;
}

export interface MetodosPagoData {
  metodos_pago: {
    [key: string]: MetodosPago;
  };
}
