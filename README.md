# Sticket Backup

Este projeto visa a implementação de uma aplicação Mobile para realizar o backup dos Stickets do Whatsapp, possibilitando a Importação / Exportação das Figurinhas.
Projeto criando usando React Native com Expo
Para criar um clone e rodar esse projeto é necessário instalar o expo.

## REQUISIÇÕES DE PROJETO

- Exportar stickets do usuario // acesso ao armazenamento do usuario de forma automatica (v2)
- Armazenamento dos stickets em nuvem
- Importar stickets do usuario // pegar os Stickets da nuvem e adicionar no armazenamento interno

### Funcionalidades extras

- Integrar aplicação para criar pacotes de stickets no whatsapp
- Opção de compartilhar os Stickets com outros usuarios
- tela de copyright > adicionar perfis dos devs.

## TELA > Front END

-> Criei dois arquivos com o mesmo nome dos components.

> Tela Home c

    - Botão de Login no app através do google drive
     Adicione um botão "Fazer login com o Google" claramente visível e seguro a uma página de criação ou configuração de conta.
        - UX do botão "Fazer login com o Google" Um botão personalizado dá aos usuários uma indicação rápida do status da sessão,
         do Google e do app, antes de clicar no botão.
            Veja exeplo em <img src="./assets/img/sessao.png">

> Tela de Interação

    - Botão de Upload de arquivos / Exportar
    - Botão de Dowload de arquivos / Importar

## BackEnd

- Integração com google drive
- Faça login com um toque, se você já estiver conectado à sua Conta do Google.
- Importação / Exportação dos arquivos
- aplicar funcionalidades extras

> Commands

        npx expo install expo-auth-session expo-random > instalar dependencias do authsession
        import * as AuthSession from 'expo-auth-session' > importa o authsession

## LINKS uteis para implementação do projeto.

> Implementar a autenticação com o google drive

    "https://developers.google.com/workspace/guides/get-started"
    video exemplo de implementação  "https://www.youtube.com/watch?v=GSHc5vlj6aQ&ab_channel=Code11Programa%C3%A7%C3%A3o"

> Gerenciamentos das pastas do Drive

    "https://developers.google.com/drive/api/guides/manage-sharing"
