#!/usr/bin/env bash
# Descarrega do site atual as imagens e o catálogo PDF reaproveitados no novo site.
# Correr a partir da raiz do projeto:  bash scripts/importar-imagens.sh
set -e
BASE="https://www.funerariaalmeida.pt/wp-content/uploads"
cd "$(dirname "$0")/../public"
mkdir -p docs images/produtos

get () { echo "→ $2"; curl -fsSL "$BASE/$1" -o "$2" || echo "   (falhou: $1)"; }

get 2016/11/catalogo-precos.pdf        docs/catalogo-precos.pdf
get 2016/11/logotipo.png                images/logotipo.png
get 2016/11/funerais_6.jpg              og-image.jpg

# Urnas (vista completa do modelo)
get 2017/04/silencio_04-300x300.jpg        images/produtos/silencio_04.jpg
for f in mar ceu paz luz paraiso harmonia eterna_harmonia eterno_silencio silencio_mogno eterno_silencio_mogno delicadeza; do
  get "2017/04/${f}_01.jpg" "images/produtos/${f}_01.jpg"
done
get 2016/11/liberdade_01.jpg               images/produtos/liberdade_01.jpg
get 2016/11/luz_eterna_01.jpg              images/produtos/luz_eterna_01.jpg

# Potes
for f in pote_luz_eterna pote_silencio pote_prata pote_note pote_pedra_1 pote_pedra2 pote_equilibrio; do
  get "2017/05/${f}-300x300.jpg" "images/produtos/${f}.jpg"
done
echo "Concluído. Faça 'npm run build' para gerar o site com as imagens."
