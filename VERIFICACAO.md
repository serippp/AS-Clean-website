# Verificação da demonstração A&S Clean

Testes locais em Chrome, sobre HTTP, realizados em 25 de outubro de 2026.

Após a correção da estrutura plana usada no GitHub, foi repetido o teste sobre HTTP em 1440 × 1000 e 390 × 844. Os dois vídeos atingiram `readyState 4`, reproduziram e avançaram; todas as imagens carregaram; não houve respostas 404, erros de JavaScript nem scroll horizontal.

| Verificação | Resultado |
| --- | --- |
| Hero | Composição revista visualmente em computador e telemóvel. |
| Vídeo principal | Reprodução automática sem som confirmada, incluindo avanço do tempo; 720 × 1280, 12,84 s. |
| Vídeo do processo | Carregamento e reprodução confirmados ao entrar na secção; 480 × 848, 14,37 s. |
| Fotografia real | Imagem completa, sem comparador artificial; ampliação e fecho confirmados. |
| Logótipo e favicon | Ficheiros incluídos e carregamento local sem erros. |
| WhatsApp | Número e mensagens verificados nos dez links; ligação geral e ligações específicas dos quatro serviços. |
| Instagram e telefone | Destinos correspondem aos contactos fornecidos; ligações externas com abertura separada e proteção noopener. |
| Menu móvel | Abertura, navegação, fecho e tecla Escape confirmados. Foco contido no menu enquanto está aberto. |
| Responsividade | 320, 375, 390, 430, 620, 768, 1024, 1280 e 1440 px. |
| Scroll horizontal | Ausente nas nove larguras testadas; nenhum elemento de conteúdo ultrapassa a largura do ecrã. |
| Composição | Revisão visual das páginas completas em computador e telemóvel; corrigidos os detalhes de leitura identificados. |
| JavaScript | Verificação de sintaxe e execução no navegador sem erros. |
| Caminhos | Referências relativas; imagens e vídeos servidos sem respostas 404 nos testes locais. |
| Movimento reduzido | Preloader desativado, vídeos sem autoplay, conteúdo visível e animações desativadas. |
| Textos | Português de Portugal; serviços e contactos do briefing; sem avaliações, estatísticas ou certificações inventadas. |
| Netlify | Projeto estático, index na raiz, configuração sem build, materiais e fonte incluídos. |

Os testes dos contactos confirmam os endereços e a configuração das ligações. Não foi enviada qualquer mensagem nem realizada qualquer chamada. O acesso às páginas ou aplicações externas pode depender da sessão do visitante e das regras do WhatsApp ou Instagram.

Não foi efetuada publicação na Netlify nem noutro alojamento público. Os resultados acima verificam a versão local e não constituem confirmação de um deploy remoto. Após publicar, confirme os materiais também no endereço definitivo.
