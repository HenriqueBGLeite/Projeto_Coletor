export class Produto {

    public constructor(
        public codprod?: number,
        public descricao?: string,
        public qtunitcx?: number,
        public embalagem?: string,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}