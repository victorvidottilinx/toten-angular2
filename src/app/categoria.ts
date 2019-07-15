
export interface Categoria {
categorias: [
  {
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
      subcategoria_pisos_e_revestimentos_produtos: [
        {
          id: number;
          nome: string;
          template: string;
          descrição: string;
          marca: string;
          valor: number;
          src: string;
        }
      ]
    }

   ];


  },
  {
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
        subcategoria_pisos_e_revestimentos_produtos: [
          {
            id: number;
            nome: string;
            template: string;
            descrição: string;
            marca: string;
            valor: number;
            src: string;
          }
        ]
      }

    ];


    }
 ];
}
