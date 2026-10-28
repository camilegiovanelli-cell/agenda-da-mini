# Agenda da Mile 🐾

Agenda web instalável para iPhone, com visual pastel e mascote da Mile.

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


## Recursos de voz (versão atualizada)
- **Falar compromisso:** usa reconhecimento de fala do navegador quando disponível; no iPhone, se não funcionar, use o microfone do teclado.
- **Ditado para o diário:** transforma fala em texto quando o navegador oferece reconhecimento de fala.
- **Gravar áudio:** solicita permissão do microfone e grava áudio para guardar junto com o registro do diário. Os áudios ficam no armazenamento local do navegador (IndexedDB) e não são incluídos no backup JSON de texto. Não limpe os dados do Safari se quiser manter esses áudios.
- Para gravar, abra o site publicado por HTTPS e permita o acesso ao microfone.


## Atualização visual
Esta versão renomeia o aplicativo para Agenda da Mile, adota tons de lilás bebê e inclui uma ilustração cartoon na identificação visual. Inclui ditado por voz para compromissos/diário quando suportado pelo navegador e gravação de áudio no diário.


## Correção da gravação de áudio
- O diário agora tem controles separados: **Iniciar gravação** e **Parar e finalizar**.
- Ao parar, aguarde a mensagem de finalização e o player de áudio aparecer antes de tocar em **Guardar no diário**.
- O cache offline foi atualizado para a versão v3 para evitar que o navegador continue usando o JavaScript antigo.


## Ajustes desta versão
- Corrige o tamanho da ilustração da Mile no cabeçalho para ela não ocupar a tela toda.
- Ajusta campos e cartões para evitar estouro horizontal em telas pequenas.
- Fluxo de compromisso por voz: toque em **Adicionar por voz**, fale, toque em **Parar**, confira a transcrição e toque em **Salvar compromisso**.
- O reconhecimento de fala depende do suporte do navegador. Se não estiver disponível no iPhone, use o microfone do teclado para ditar no campo de texto.
- Cache do service worker atualizado para forçar a troca da versão anterior.


## Reconhecimento de compromisso por voz
Ao falar um compromisso em português, inclua dia e hora na frase, por exemplo: “Amanhã às 14 horas, consulta médica” ou “sexta-feira às 9h, reunião”. Ao tocar em Parar, o app tenta reconhecer expressões como hoje, amanhã, depois de amanhã, dias da semana, datas numéricas e horários, e preenche os campos de data/hora automaticamente para conferência. A precisão depende da transcrição fornecida pelo navegador; o app não identifica biometricamente a identidade da voz.


## Agenda diária, classificação e lembretes (v5)
- Visão diária em linha do tempo com filtro por data, horários e categoria.
- Classificação automática por palavras-chave para compromissos ditados (a classificação pode ser corrigida antes de salvar escolhendo Pessoal/Profissional).
- Reconhecimento de data como “dia 28”, “amanhã”, “hoje”, dias da semana e datas numéricas, além de horários como “às 7h40”. Sempre confira a data reconhecida antes de salvar.
- Lembrete configurado para 15 minutos antes. Por limitações do navegador/iOS, a notificação é verificada enquanto o site está aberto e visível, com permissão concedida; não funciona de forma garantida com a página fechada.


## Correções v10
- A aba **Diário** inclui um resumo automático das atividades marcadas como concluídas, organizado pela data em que foram concluídas. O resumo é atualizado ao marcar/desmarcar tarefas e não exige digitação manual.
- A gravação de compromisso aplica a interpretação de data e horário assim que o navegador entrega o resultado e mantém o botão disponível para novas tentativas.
- O cache do service worker foi atualizado para solicitar a nova versão do aplicativo.


Ícone da tela inicial: atualizado para o avatar ilustrado da Agenda da Mile. Para atualizar no iPhone, remova o atalho antigo e adicione novamente pelo Safari após publicar estes arquivos.
