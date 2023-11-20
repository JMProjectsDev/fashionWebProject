export interface Products {
  cat: string;
  nombre: string;
  precio: string;
  img: string;
  tipo: string;
}

export interface ProductsData {
  top_ventas: {
    [key: string]: Products;
  };
}
