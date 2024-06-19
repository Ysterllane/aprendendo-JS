# O que é API?

* Application Programming Interface (Interface de Programação de Aplicações);
* Fácil integração com sistemas (JSON), apenas dando respostas;
* Padrão de desenvolvimento, permitindo a troca de APIs;
* Exemplo prático: cotação de frete (correios, Amazon);

# Retornos de requisições

Quando estamos realizando uma requisição para a API, estamos trocando mensagens HTTP’s. HTTP é um protocolo, uma forma de conversa entre duas máquinas, que permite transferir hiper-texto de um lado a outro. Daí o nome Hyper Text Transport Protocol.

Uma requisição é composta de uma request (solicitação) e uma response (resposta). Request e Response são dois tipos de mensagem diferentes quando falamos de HTTP. A especificação HTTP diz exatamente o que podemos colocar dentro de cada um destes tipos de mensagem para que todos que "falem" o idioma HTTP consigam trocar informações corretamente.

Em uma response é retornado um response code (código de resposta) e um motivo, que dá significado ao código. A estrutura padrão desse código tem três dígitos, sendo o primeiro referente a classificação dele. Elas são:

1XX: Informativo – a solicitação foi aceita ou está em andamento;
2XX: Confirmação – a solicitação foi concluída ou entendida;
3XX: Redirecionamento – faltou alguma coisa na solicitação;
4XX: Erro do cliente – houve um erro na solicitação;
5XX: Erro no servidor – houve uma falha no servidor durante a solicitação.

Durante essa aula nós conhecemos um deles: quando consultado um CEP de formato inválido na API do ViaCEP ela nos retornará o código 400 (Bad Request).

# endpoit da api

é a URL onde seu serviço pode ser acessado por uma aplicação.