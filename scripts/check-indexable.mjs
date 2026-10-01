// Verificação de segurança após "npm run build": a versão final tem de ser indexável.
// Falha se encontrar noindex nas páginas ou um robots.txt a bloquear o site.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');
const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);

// As páginas de redirecionamento do Astro (meta refresh) levam noindex de propósito.
const isRedirect = (html) => /http-equiv="refresh"/i.test(html);
const blocked = htmlFiles(dist).filter((f) => {
  const html = readFileSync(f, 'utf8');
  return !isRedirect(html) && /<meta[^>]+name="robots"[^>]+noindex/i.test(html);
});
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
const problems = [
  ...blocked.map((f) => `noindex em ${f}`),
  ...(/^Disallow:\s*\/\s*$/m.test(robots) ? ['robots.txt bloqueia o site inteiro'] : []),
];

if (problems.length) {
  console.error('\n✗ A build final não é indexável pelo Google:\n  ' + problems.join('\n  '));
  console.error('  (Para mostrar ao cliente use "npm run build:preview", que gera dist-preview/.)');
  process.exit(1);
}
console.log('✓ dist/ indexável: sem noindex, robots.txt aberto.');
