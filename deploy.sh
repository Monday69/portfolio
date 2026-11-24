#!/usr/bin/env bash
# Build puis envoi du site statique sur le VPS.
# Usage : VPS=utilisateur@ip ./deploy.sh
set -euo pipefail
: "${VPS:?Définir VPS=utilisateur@ip}"
TARGET="${TARGET:-/srv/portfolio}"

npm run build
rsync -az --delete dist/ "$VPS:$TARGET/"
echo "Déployé sur $VPS:$TARGET"
