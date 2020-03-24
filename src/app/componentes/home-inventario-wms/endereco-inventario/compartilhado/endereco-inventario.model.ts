export class EnderecoInventario {

    public constructor(
        public codigo?: string,
        public deposito?: number,
        public rua?: number,
        public predio?: number,
        public nivel?: number,
        public apto?: number,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string,

    ) {}

}