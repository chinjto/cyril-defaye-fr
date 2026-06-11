#!/usr/bin/env bash

set -euo pipefail

source .env

if ! command -v lftp >/dev/null 2>&1; then
  echo "Error: lftp is required."
  echo "Install it with: sudo apt install lftp"
  exit 1
fi

echo "Deploying ${DIST_DIR}/ to ${FTP_USER}@${FTP_HOST}:${FTP_PATH}/"

lftp -u "${FTP_USER},${FTP_PASSWORD}" "sftp://${FTP_HOST}" <<LFTP
set sftp:auto-confirm yes
mirror \
  --reverse \
  --delete \
  --verbose \
  "${DIST_DIR}/" \
  "${FTP_PATH}/"
bye
LFTP

echo "Deployment completed."
