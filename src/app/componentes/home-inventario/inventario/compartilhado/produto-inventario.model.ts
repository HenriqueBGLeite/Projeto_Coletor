export class ProdutoInventario {

    public constructor(
        public codprod?: number,
        public descricao?: string,
        public qtunitcx?: number,
        public embalagem?: string,
        public lastro?: number,
        public camada?: number,
        public datavalidade?: Date,
        public qtcx?: number,
        public qtun?: number,
        public total?: number,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}