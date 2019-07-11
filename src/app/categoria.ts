
export interface Categoria {
  id: number;
  nome: string;
  template: string;
  src: string;
  subcategoria: [
    {
      id: number;
      nome: string;
      template: string;
      src: string;
    }
  ];
}
