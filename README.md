Bloqueador de Página
Este é um simples bloqueador de página desenvolvido como uma extensão do Chrome. Ele permite bloquear automaticamente páginas da web específicas com base em URLs previamente definidas pelo usuário.

Tecnologias Utilizadas
JavaScript
A linguagem principal utilizada para desenvolver esta extensão é o JavaScript. O JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web e é suportada pelo navegador Chrome.

Chrome Extension APIs
Esta extensão do Chrome utiliza várias APIs fornecidas pela plataforma de extensão do Chrome:

chrome.tabs: Esta API é usada para interagir com as guias do navegador. Ela é utilizada para verificar a URL da página atual, fechar abas e executar ações quando as guias são ativadas ou atualizadas.

chrome.storage.local: Esta API é usada para armazenar dados localmente no navegador. É utilizada para armazenar as URLs das páginas bloqueadas e para sinalizar se uma página foi bloqueada anteriormente.

chrome.scripting: Esta API é utilizada para injetar scripts em páginas da web. É utilizada para exibir alertas em páginas web quando uma página é bloqueada.

Manifest File (manifest.json)
O arquivo manifest.json é um arquivo de configuração usado em extensões do Chrome para descrever as propriedades da extensão, como nome, versão, permissões necessárias e scripts de fundo. Ele também lista todos os arquivos necessários para a extensão funcionar corretamente.

Content Scripts
Os scripts de conteúdo (content scripts) são scripts que são injetados nas páginas da web pelo navegador. Neste caso, um script de conteúdo é usado para verificar se uma página foi bloqueada anteriormente e exibir um alerta quando uma nova página é carregada.

Como Executar
Para usar esta extensão, basta carregar a pasta da extensão no Chrome:

Abra o Chrome e vá para a página "chrome://extensions/".
Ative o modo de desenvolvedor (Developer mode) no canto superior direito da página.
Clique no botão "Load unpacked" e selecione a pasta da extensão.
A extensão será carregada no navegador e estará pronta para uso.
