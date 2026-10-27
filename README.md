# Agenda da Mile 🐾

Agenda web instalável para iPhone, com visual pastel e mascote da Mile.

## Arquivos
- `index.html`: aplicativo e funcionalidades.
- `manifest.json`: nome, cores e configuração para adicionar à tela inicial.
- `sw.js`: cache básico para uso offline depois da primeira abertura.
- `icon.svg`: ícone personalizado.

## Publicar no Vercel
1. Envie estes arquivos para a raiz do repositório GitHub `agenda-da-mile`.
2. No Vercel, escolha **Add New → Project** e importe esse repositório.
3. Como é um site HTML estático, não precisa de framework nem comando de build. Se houver campos, deixe **Build Command** vazio e **Output Directory** como `.`.
4. Faça o deploy e abra a URL gerada no Safari do iPhone.
5. No Safari, toque em **Compartilhar → Adicionar à Tela de Início**.

## Observações importantes
- Os registros são guardados localmente no navegador/aparelho. Use o recurso de exportação para fazer backup.
- Para entrada por voz no iPhone, use o microfone de ditado do teclado dentro do campo de texto.
- A agenda não promete alarmes locais confiáveis quando está fechada; o suporte a notificações web no iOS tem limitações.
- O ícone SVG funciona em navegadores modernos; se algum aparelho não o aceitar como ícone de tela inicial, será necessário fornecer uma versão PNG.


## Recursos de voz (versão atualizada)
- **Falar compromisso:** usa reconhecimento de fala do navegador quando disponível; no iPhone, se não funcionar, use o microfone do teclado.
- **Ditado para o diário:** transforma fala em texto quando o navegador oferece reconhecimento de fala.
- **Gravar áudio:** solicita permissão do microfone e grava áudio para guardar junto com o registro do diário. Os áudios ficam no armazenamento local do navegador (IndexedDB) e não são incluídos no backup JSON de texto. Não limpe os dados do Safari se quiser manter esses áudios.
- Para gravar, abra o site publicado por HTTPS e permita o acesso ao microfone.


## Atualização visual
Esta versão renomeia o aplicativo para Agenda da Mile, adota tons de lilás bebê e inclui uma ilustração cartoon na identificação visual. Inclui ditado por voz para compromissos/diário quando suportado pelo navegador e gravação de áudio no diário.
