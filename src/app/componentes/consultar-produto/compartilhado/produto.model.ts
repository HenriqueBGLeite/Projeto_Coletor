export class Produto {

    public constructor(
        public codfilial?: number,
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