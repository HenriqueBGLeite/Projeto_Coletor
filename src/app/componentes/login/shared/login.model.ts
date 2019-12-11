export class Usuario {

    public constructor(
        public codigo?: string,
        public nome?: string,
        public base?: string,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string
    ) {}
}