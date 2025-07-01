# GithubPage

Tentando colocar repositório online pelo próprio Github

## Link tutorial e links uteis

[Tutorial Gaël Thomas](https://medium.com/flycode/how-to-deploy-a-static-website-for-free-using-github-pages-8eddc194853b)

[Sobre as publicações do proprio Git](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

[Limites do pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

[Docs Git](https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## [Como implementar um site estático gratuitamente usando páginas do Github](https://medium.com/flycode/how-to-deploy-a-static-website-for-free-using-github-pages-8eddc194853b)
> Aprenda como hospedar um site estático de várias páginas gratuitamente usando o GitHub Pages em apenas sete etapas.
> Gaël Thomas

O GitHub é uma excelente plataforma para salvar seus projetos de código e trabalhar com seus colegas. Mas você sabia que eles também oferecem uma solução de hospedagem gratuita chamada Pages?
Este recurso é útil para implementar seus sites estáticos (HTML, CSS e JavaScript) como um portfólio, documentação de projeto ou qualquer coisa que você queira! Ele até permite que você configure um nome de domínio personalizado (mas vamos nos concentrar apenas na parte de hospedagem neste tutorial).
Mas há uma limitação: como é um serviço estático, ele não suporta scripts do lado do servidor (PHP, Python, etc.).

### 1. Crie um novo repositório GitHub
Como mencionado acima, usaremos o GitHub Pages para hospedar nosso site estático. Nesta primeira etapa, você precisará criar um novo repositório na sua conta.
> Observação: se você ainda não tem uma conta no GitHub, pode criar uma na página inicial .
Para fazer isso, abra a página “Criar um novo repositório” no GitHub.
Sinta-se à vontade para escolher um nome diferente para o seu repositório! Mas faça sabendo Que esse nome fará parte da URL do seu site.

Para este tutorial, nomearei meu repositório: “my-cool-website”.


Página “Criar um novo repositório” no GitHub
### 2. Clone o repositório no seu computador

Após criar seu repositório, você será redirecionado para a página dele. Lá, você poderá copiar/colar o link HTTPS ou SSH e clonar o repositório no seu computador.
```bash
$ git clone [URL HTTPS ou SSH]
```
### 3. Crie um site estático
Hora da criatividade! 🎨

Convido você a abrir seu repositório na sua IDE favorita e criar um arquivo index.html. Ele será o ponto de entrada do nosso site.
Abaixo está o modelo que usarei.
```html
<! DOCTYPE  html > 
<html> 
   <head> 
      <title>Meu site incrível</title> 
   </head> 
   <body> 
      <h1>Bem-vindo ao meu site! ⭐️</h1> 
      <p>Como foi seu dia? 🎉</p> 
   </body> 
</html>
```

### 4. Envie seu código para o GitHub
Está satisfeito com o seu index.htmlarquivo? Se não, não se preocupe. Você aprenderá como atualizá-lo mais adiante, nas próximas etapas! ⏭

Quando seu código estiver pronto, você precisará salvá-lo no GitHub. Você pode digitar os comandos abaixo para fazer isso:
```bash
$ git add index.html 
$ git commit -m "Inicializar site" 
$ git push origin main
```

Até aqui, você deve estar fazendo a mesma coisa que nos seus outros projetos do GitHub.
Para verificar se tudo está funcionando corretamente, você pode abrir seu repositório no GitHub e verificar se o arquivo index.html é exibido. Se sim, você está pronto para a próxima etapa!

Página “Repositório” no GitHub (com o arquivo `index.html`)

### 5. Abra as configurações do seu repositório
Vamos implementar seu site e disponibilizá-lo para o mundo! 
Na página do seu repositório, você verá um menu na parte superior. Clique na imagem abaixo, na última opção chamada "Configurações" e depois em "Páginas" na barra lateral.

Página “Configurações do repositório” no GitHub

Após clicar em "Páginas", você será direcionado para a configuração das Páginas do GitHub. É lá que você solicitará ao GitHub que implante seu site online e crie uma URL para ele.

Duas configurações estão disponíveis:

O branch de implantação: qual branch do seu repositório será implantado.
A pasta de implantação (por padrão, "/root"): qual pasta do repositório você deseja usar como ponto de entrada. Recomendo que você mantenha a opção padrão. Mas você verá que também pode selecionar "/docs" se quiser criar um site do GitHub para suas páginas de documentação (armazenadas no repositório "/docs").
Vamos nos ater às opções mais padrão e selecionar “main” como seu branch de implantação e manter “/ (root)” como a pasta de implantação.

“Configuração da página do repositório” no GitHub (antes de ativar as páginas do GitHub)
Ao clicar no botão “Salvar”, a página recarrega e… TADA! 

“Configuração da página do repositório” no GitHub (após ativar as páginas do GitHub)

Seu site está no ar! 
Observação: como você pode ver, a URL é baseada no seu nome de usuário do GitHub e no nome do repositório, seguindo esse padrão: https://github-username.github.io/repository-name/
Vamos clicar no seu URL para ver a versão online do seu site.

Aqui está o meu!

“my-cool-site” hospedado no GitHub Pages

### 6. Adicione uma nova página
Falando em melhorias, uma página não é muita coisa para um site. O que você acha de criar uma nova página? 

Agora que tudo está configurado, vamos retornar ao nosso IDE e criar uma about.htmlpágina.

Assim como fizemos com o index.html. Sinta-se à vontade para criar o código de sua escolha!

Aqui está o modelo que usarei para esta nova página:

```html
<! DOCTYPE  html > 
<html> 
   <head> 
      <title>Sobre - Meu site incrível</title> 
   </head> 
   <body> 
      <h1>Sobre meu site! 🎙</h1> 
      <p>Obrigado por seguir este tutorial. 🙏</p> 
   </body> 
</html>
Então, vamos criar um botão na página inicial ( index.html) para abrir a página sobre com um clique.
```
```html
<! DOCTYPE  html > 
<html> 
   <head> 
      <title>Meu site incrível</title> 
   </head> 
   <body> 
      <h1>Bem-vindo ao meu site! ⭐️</h1> 
      <p>Como foi seu dia? 🎉</p> 
      <a href="./about">Leia a página sobre</a> 
   </body> 
</html>
```
### 7. Atualize seu site
Uma nova página nasceu! Vamos torná-la realidade! 🆕

A última etapa deste tutorial ensinará como atualizar seu site estático após o primeiro lançamento.

Agora que tudo está configurado, vamos para a etapa 4, "Enviar seu código para o GitHub". Na parte anterior, enviamos nosso código para o nosso repositório. Aqui, o processo será o mesmo com as novas atualizações.

Queremos salvar nossa about.htmlpágina e atualizá-la index.htmlcom as novas alterações.

Vamos fazer isso usando os mesmos comandos do Git do passo 4.

```bash
$ git add index.html about.html 
$ git commit -m "Adicionar uma página sobre" 
$ git push origin main
```

Quando terminar, aguarde alguns minutos, volte para a URL do seu site, recarregue e suas alterações deverão aparecer!

A página inicial do “My Cool Website” foi atualizada com um link “Leia a página sobre”
