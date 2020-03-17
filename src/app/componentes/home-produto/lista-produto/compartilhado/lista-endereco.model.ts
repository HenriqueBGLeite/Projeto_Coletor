export class ListaEndereco {

    public constructor(
        public codprod?: number,
        public descricao?: string,
        public qt?: number,
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