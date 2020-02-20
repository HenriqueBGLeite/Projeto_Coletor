export class Usuario {

    public constructor(
        public filial?: number,
        public codigo?: number,
        public nome?: string,
        public base?: string,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string
    ) {}
}