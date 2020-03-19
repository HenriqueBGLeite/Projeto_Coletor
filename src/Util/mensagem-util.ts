export class MensagemUtil {

    //Geral
    public static BUSCA_REALIZADA = 'Buscar realizada com sucesso!';
    public static ERRO_NENHUM_REGISTRO = 'Nenhum produto encontrado!';
    public static ERRO_NA_BUSCA = 'Erro ao buscar registros na API.';
    public static CARREGANDO_REGISTRO = 'Carregando Registros...';
    public static VALIDANDO_DADOS = 'Aguarde, validação dos dados...';
    public static REGISTRO_SALVO = 'Registro salvo com sucesso!';
    public static REGISTRO_ALTERADO = 'Registro alterado com sucesso!';
    public static ERRO_SALVAR = 'Ocorreu um erro ao tentar salvar o registro!';
    public static ERRO_BUSCA = 'Ocorreu um erro na busca!';
    public static VALIDA_DADOS = 'Dados inválidos para requisição.';
    public static VALIDA_LASTRO_CAMADA = 'Lastro/Camada informados, diferem do cadastro.';

    //Tela Listagem
    public static PRODUTO_REPETIDO = 'Produto já esta na listagem!';

    //Tela Inventario
    public static ENDERECO_NAO_CONFERE = 'Endereço não confere!';


    //Tela Login
    public static USUARIO_NAO_CADASTRADO = 'Usuário inválido ou não cadastrado.';
    public static USUARIO_NAO_ENCONTRADO = 'Falha na autenticação, efetue novamente o login.';


    public static criaMensagemSucesso(mensagem: string) {
        return {severity:'success', summary:'Sucesso!', detail: mensagem};
    }

    public static criaMensagemAviso(mensagem: string) {
        return {severity:'warn', summary:'Atenção!', detail: mensagem};
    }

    public static criaMensagemErro(mensagem: string) {
        return {severity:'error', summary:'Ocorreu um erro!', detail: mensagem};
    }

}