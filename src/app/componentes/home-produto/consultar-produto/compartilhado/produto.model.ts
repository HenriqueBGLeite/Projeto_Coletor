export class Produto {

    public constructor(
        public codfilial?: number,
        public embalagemmaster?: string,
        public unidademaster?: string,
        public qtcx?: number,
        public dun?: number,
        public embalagem?: string,
        public unidade?: string,
        public qtunit?: number,
        public ean?: number,
        public alt?: number,
        public larg?: number,
        public comp?: number,
        public peso?: DoubleRange,
        public lastro?: number,
        public camada?: number,
        public total?: number,
        public estger?: number,
        public estreserv?: number,
        public estbloq?: number,
        public estavaria?: number,        
        public codprod?: number,
        public descricao?: string,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}