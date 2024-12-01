# CreateUser
Tudo relacionado à criação de um usuário

1. index.ts - Responsável por instanciar todo o caso de uso e exportar os métodos necessários para serem utilizados no controller (CreateUserController)
2. CreateUserController.ts - Camada de infraestrutura (do mundo externo, onde o cliente se comunica, faz uma chamada direta por algum protocolo)
3. CreateUserDTO.ts - Transferir um objeto entre as camadas da aplicação
4. CreateUserUseCase - Camada de execução do caso de uso, vincula repositórios / providers ao controller (interação do usuário)
5. CreateUserUseCase.spec.ts - Testes

