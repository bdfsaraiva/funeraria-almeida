import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// A pré-visualização (npm run build:preview) vai para outra pasta, para nunca se misturar
// com a versão final, que tem de ser indexável pelo Google.
const isPreview = process.env.PUBLIC_PREVIEW === '1';

export default defineConfig({
  site: 'https://www.funerariaalmeida.pt',
  outDir: isPreview ? './dist-preview' : './dist',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Mantém os espaços entre elementos inline; a predefinição do Astro 7 ('jsx') remove-os.
  compressHTML: true,
  // Mantém o CSS compatível com os browsers já suportados: com os alvos predefinidos do Vite 8,
  // as media queries passam a (width<=760px), que o Safari anterior à 16.4 ignora.
  vite: { build: { cssTarget: ['chrome88', 'edge88', 'firefox78', 'safari14'] } },
  integrations: [sitemap()],
  // Endereços antigos que deixam de ter página própria.
  // Em Apache, o ficheiro public/.htaccess faz o mesmo com 301 (preferível para SEO).
  redirects: {
    '/funeral': '/funerais/',
    '/agencias-funerarias': '/funerarias/',
  },
});
