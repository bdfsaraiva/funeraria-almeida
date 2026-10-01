# Funerária Almeida — novo website

Redesenho do site [funerariaalmeida.pt](https://www.funerariaalmeida.pt), construído com **[Astro](https://astro.build)** (gera HTML estático) e CSS próprio, sem frameworks de interface pesados. O resultado final é uma pasta `dist/` com HTML/CSS que pode ser alojada em qualquer servidor (incluindo o alojamento atual do WordPress).

## Começar

```bash
npm install
bash scripts/importar-imagens.sh   # descarrega do site atual o catálogo PDF, prémios e fotos de produtos
npm run dev                         # pré-visualização em http://localhost:4321
npm run build                       # gera a pasta dist/ para publicar
npm run build:preview               # gera dist-preview/ (não indexável) para mostrar ao cliente antes de publicar
```

Publicação: enviar o **conteúdo** de `dist/` para a raiz do alojamento (FTP). O `.htaccess` e o `enviar.php` (formulário) já vão incluídos e funcionam em Apache com PHP.

A pré-visualização (`dist-preview/`) nunca deve ir para o alojamento definitivo: bloqueia o Google. O `npm run build` verifica isto automaticamente e falha se a versão final tiver `noindex`.

### Pré-visualização online (GitHub Pages)

Cada `push` para `main` publica automaticamente a pré-visualização em `https://<utilizador>.github.io/<repositório>/` (workflow em `.github/workflows/pages.yml`). Ativar uma única vez em **Settings → Pages → Build and deployment → Source: GitHub Actions**. O plano gratuito do GitHub só permite Pages em repositórios públicos.

## Onde editar

| O quê | Ficheiro |
|---|---|
| Telefones, email, moradas, textos dos serviços, FAQ | `src/data/site.ts` (tudo centralizado) |
| Cores, tipografia, espaçamentos | `src/styles/global.css` (variáveis no topo, `:root`) |
| Secções da página inicial / páginas internas | `src/styles/sections.css` / `src/styles/content.css` |
| Prémios e distinções (cabeçalho, página inicial, rodapé) | `awards` em `src/data/site.ts` + imagens em `public/images/premios/` |
| Cabeçalho, rodapé, SEO global | `src/layouts/Base.astro` |
| Páginas | `src/pages/` |
| Logótipo | `public/logo.svg` (fundos claros), `public/logo-light.svg` (fundos escuros), `public/favicon.svg` |

---

## Análise do site atual

**Pontos fortes a manter:** conteúdo abrangente, telefone 24h sempre presente, a distinção DECO PROTESTE, páginas locais (Lisboa, Almada, Cascais…) que trazem tráfego orgânico.

**Problemas identificados**

1. **Aspeto datado** — tema WordPress "Bridge" de 2015–2016, slider Revolution, ícones em imagem, tipografia genérica; transmite pouca confiança num setor em que a confiança é tudo.
2. **Hierarquia confusa** — a home repete o mesmo telefone 6+ vezes e duplica blocos de texto SEO (Funerais / Funerárias / Agências funerárias…) que competem com a mensagem principal.
3. **Informação desatualizada ou inconsistente** — "mais de 30 anos" (desde 1982 são 44), "© 2025", o menu não mostra Carnaxide, a Amadora não tem morada.
4. **Móvel** — `user-scalable=no` impede o zoom (problema de acessibilidade); não há botão de chamada fixo, que é a ação nº 1 num telemóvel.
5. **Performance** — WordPress + Revolution Slider + jQuery; catálogo apresentado como dezenas de imagens JPEG de páginas digitalizadas.
6. **SEO técnico** — `og:type=article` na home, títulos duplicados ("Funerária Almeida | Funerária Almeida"), sem dados estruturados (schema.org), meta keywords obsoletas.
7. **Formulário** — sem consentimento explícito RGPD nem proteção anti-spam visível.

## O que muda no novo site

- **Identidade da marca**: logótipo oficial vetorizado a partir do PNG do site atual (nítido em qualquer ecrã, com versão clara para fundos escuros). A paleta "sépia & âmbar" (pergaminho, café, âmbar) vem do gradiente do próprio logótipo, e a folha do logótipo é usada como elemento gráfico.
- **Tipografia**: Newsreader (títulos, com acentuação portuguesa correta) e Jost (texto, da mesma família geométrica do "SERVIÇOS FUNEBRES" do logótipo).
- **Fotografia da marca**: as folhas sobre madeira no topo, as velas em moldura de arco e as folhas de outono como textura escura, todas com tratamento sépia. As urnas usam as fotografias oficiais do catálogo.
- **Prémios logo à entrada**: selos PME Líder, PME Excelência e Scoring no cabeçalho de todas as páginas e num painel de destaque no topo da página inicial, com a classificação DECO PROTESTE.
- **Contacto sempre à mão**: número 24h no cabeçalho, cartão de contacto no topo, e **barra fixa "Ligar 24h" no telemóvel**.
- **Nova secção "Quando alguém parte"** — 4 passos que tranquilizam quem chega ao site em choque.
- **FAQ** com as dúvidas mais comuns (preço, pagamento, fins de semana, burocracia).
- **Agências com moradas e link para o mapa**, incluindo Carnaxide e Necessidades.
- **SEO preservado**: todos os endereços atuais mantêm-se (`/servicos-funerarios/cremacao/`, `/agencias-funerarias-lisboa/`, …); os que desaparecem têm redirecionamento 301. Novos: dados estruturados `FuneralHome`, `FAQPage` e `BreadcrumbList`, sitemap automático, títulos únicos.
- **Rápido e acessível**: HTML estático, praticamente sem JavaScript, zoom permitido, contraste adequado, navegação por teclado, respeito por "reduzir movimento".
- **Formulário** com consentimento RGPD, campo anti-spam e mensagem de sucesso.

## A validar com o cliente antes de publicar

- [x] **Logótipo oficial** — vetorizado em `public/logo.svg`. Se existir o ficheiro vetorial original da marca (AI/EPS/SVG), substituí-lo para máxima fidelidade.
- [ ] **Fotografias** — os fundos usam as imagens do site atual (1920px). Fotos reais das agências/equipa, em alta resolução, aumentariam ainda mais a confiança.
- [ ] **Distinções** — confirmar que todos os selos (PME Líder 2022/2025, PME Excelência 2022, Scoring 2025) podem ser exibidos e se há novos.
- [ ] **Textos novos** (não existiam no site): os 4 passos, a FAQ, os valores ("Respeito, Rigor…") e as frases "deslocação imediata, a qualquer hora" e "7 agências".
- [ ] **Morada da agência da Amadora** (o site atual não a indica).
- [ ] Páginas de **Cascais** e **Oeiras** apontam para as agências de Linda-a-Velha/Algés/Carnaxide — confirmar.
- [ ] **Catálogo**: o PDF atual é de 2016; confirmar se os preços estão em vigor.
- [ ] **Google Tag Manager** (GTM-THN8WQCG): descomentar em `Base.astro` e, se for usado para estatística/publicidade, acrescentar um aviso de cookies.
- [ ] Endereço de envio e remetente em `public/enviar.php`.
