# Agenda da Mini 🐾

Agenda web instalável para iPhone, com visual pastel e mascote da Mini.

## Arquivos
- `index.html`: aplicativo e funcionalidades.
- `manifest.json`: nome, cores e configuração para adicionar à tela inicial.
- `sw.js`: cache básico para uso offline depois da primeira abertura.
- `icon.svg`: ícone personalizado.

## Publicar no Vercel
1. Envie estes arquivos para a raiz do repositório GitHub `agenda-da-mini`.
2. No Vercel, escolha **Add New → Project** e importe esse repositório.
3. Como é um site HTML estático, não precisa de framework nem comando de build. Se houver campos, deixe **Build Command** vazio e **Output Directory** como `.`.
4. Faça o deploy e abra a URL gerada no Safari do iPhone.
5. No Safari, toque em **Compartilhar → Adicionar à Tela de Início**.

## Observações importantes
- Os registros são guardados localmente no navegador/aparelho. Use o recurso de exportação para fazer backup.
- Para entrada por voz no iPhone, use o microfone de ditado do teclado dentro do campo de texto.
- A agenda não promete alarmes locais confiáveis quando está fechada; o suporte a notificações web no iOS tem limitações.
- O ícone SVG funciona em navegadores modernos; se algum aparelho não o aceitar como ícone de tela inicial, será necessário fornecer uma versão PNG.
