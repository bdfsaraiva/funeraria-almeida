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
  integrations: [sitemap()],
  // Endereços antigos que deixam de ter página própria.
  // Em Apache, o ficheiro public/.htaccess faz o mesmo com 301 (preferível para SEO).
  redirects: {
    '/funeral': '/funerais/',
    '/agencias-funerarias': '/funerarias/',
  },
});
