# tictoTeste
#language:pt

Cenario: Verificar pagina carregada
Dado que usuario acessa a pagina
Quando ele digita a url
Entao ele deve ser redirecionado para a página inicial

Cenario:Preencher dados invalidos
Dado que o usuario preenche os dados invalidos
Quando ele aciona a opção Cadastrar
Entao deve retornar a mensagem de erro
E não cadastrar usuario

Cenario:Preencher dados validos
Dado  que o usuario preenche os dados validos
Quando ele aciona a opção Cadastrar
Entao deve aparecer a mensagem de cadastro com sucesso

Cenario:Verificar dados cadastrados
Dado que o usuario preencha os dados validos
E clica na opção cadastrar
Quando aparecer a mensagem de usuario cadastrado
Entao os dados validos aparecem na lista de cadastro
E podem ser editados

Cenario:Editar ações Invalidos
Dado que o usuario clica em editar o cadastro
E inseri os dados invalidos
Quando salvar os dados
Entao deve visualizar a mensagem de erro por dados invalidos
E não alterar o cadastro

Cenario:Preencher ações Validas
Dado que o usuario clica em Editar o seu cadastro
E inseri os dados invalidos
Quando clicar em Salvar dados
Entao deve visualizar a mensagem de cadastro com sucesso

Cenario:Verificar alterção de dados
Dado que o usuario altera o cadastro
Quando o usuario confirmar a alteracao com dados validos
Entao deve apresentar a mensagem de sucesso
E vizualizar os dados alterados

Cenario:Apagar Cadastro
Dado que o usuario aperta em excluir dados
E visualiza a mensagem de confirmação para exclusão
Quando confirmar a exclusão
Entao os dados são removidos 
E não são vizualizados 
