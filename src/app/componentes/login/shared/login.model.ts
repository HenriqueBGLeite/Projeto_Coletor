export class Usuario {

    public constructor(
        public filial?: number,
        public codigo?: number,
        public nome?: string,
        public tipoConferencia?: string,
        public permiteFecharBonus?: string,
        public diasMinValidade?: number,
        public codArea?: number,
        public digitaQt?: string,
        public usaWms?: string,
        public acessoSistema?: string,
        public acessoDigQtInvent?: string,
        public acessoConfBonus?: string,
        public acessoConfPedido?: string,
        public acessoAlterarProduto?: string,
        public acessoListaEndereco?: string,
        public acessoVerEndereco?: string,
        public acessoAltValInvent?: string,
        public acessoAltEmbProdBonus?: string,
        public base?: string,
        public token?: string,
        public erro?: string,
        public warning?: string,
        public mensagemErroWarning?: string
    ) {}
}