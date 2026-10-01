// Gera em dist-preview/ uma versão de pré-visualização para mostrar o site antes de o publicar
// (GitHub Pages, Netlify, Cloudflare Pages…). Uso: npm run build:preview
//  - páginas com <meta name="robots" content="noindex">, robots.txt a bloquear tudo
//  - formulário de contacto desativado (o alojamento estático não corre PHP)
//  - sem enviar.php / .htaccess, que só fazem sentido no alojamento Apache definitivo
//  - PREVIEW_BASE=/nome-do-repo ajusta os caminhos quando o site é servido numa subpasta
//    (ex.: https://utilizador.github.io/nome-do-repo/)
// A versão final (indexável) é gerada em dist/ com "npm run build" — as duas nunca se misturam.
import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const dist = new URL('../dist-preview/', import.meta.url);
const base = (process.env.PREVIEW_BASE || '').replace(/\/+$/, '');

execSync('npx astro build', { stdio: 'inherit', env: { ...process.env, PUBLIC_PREVIEW: '1' } });
writeFileSync(new URL('robots.txt', dist), 'User-agent: *\nDisallow: /\n');
for (const f of ['enviar.php', '.htaccess']) rmSync(new URL(f, dist), { force: true });

// Prefixa a subpasta em todos os caminhos absolutos ("/images/…", "/contactos/", url(/…)).
const rebase = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) { rebase(new URL(`${e.name}/`, dir)); continue; }
    if (!/\.(html|css)$/.test(e.name)) continue;
    const file = new URL(e.name, dir);
    const out = readFileSync(file, 'utf8')
      .replace(/\b(href|src|action)="\/(?!\/)/g, `$1="${base}/`)
      .replace(/\bsrcset="([^"]*)"/g, (_, v) => `srcset="${v.replace(/(^|,\s*)\/(?!\/)/g, `$1${base}/`)}"`)
      .replace(/url\((['"]?)\/(?!\/)/g, `url($1${base}/`)
      .replace(/(http-equiv="refresh" content="\d+;url=)\/(?!\/)/g, `$1${base}/`);
    writeFileSync(file, out);
  }
};
if (base) rebase(dist);

console.log(`\nPré-visualização pronta em dist-preview/${base ? ` (servida em ${base}/)` : ''} — não indexável, sem PHP.`);
console.log('A versão final para o alojamento é gerada em dist/ com "npm run build".');
