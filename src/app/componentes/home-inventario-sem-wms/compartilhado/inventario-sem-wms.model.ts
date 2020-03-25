export class ProdutoInventarioSemWms {

    public constructor(
        public numinvent?: number,
        public cont?: number,
        public codprod?: number,
        public descricao?: string,
        public qtunit?: number,
        public qtunitcx?: number,
        public qtcx?: number,
        public qtun?: number,
        public total?: number,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}