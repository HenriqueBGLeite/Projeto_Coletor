export class MensagemUtil {

    public static BUSCA_REALIZADA = 'Buscar realizada com sucesso!';
    public static ERRO_NENHUM_REGISTRO = 'Nenhum produto encontrado!';
    public static ERRO_NA_BUSCA = 'Erro ao buscar registros na API.';
    public static CARREGANDO_REGISTRO = 'Carregando Registros...';
    public static REGISTRO_SALVO = 'Registro salvo com sucesso!';
    public static VALIDA_DADOS = 'Dados inválidos para requisição.';


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