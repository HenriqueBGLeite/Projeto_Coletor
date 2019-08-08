export class Produto {

    public constructor(
        public codprod?: number,
        public descricao?: string,
        public fornecedor?: string,
        public embalagem?: string,
        public qtunitcx?: number,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}