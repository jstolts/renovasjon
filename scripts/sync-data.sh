#!/usr/bin/env bash
# Genererer data/*.js fra data/*.json.
# .js-filene er en innebygd reservekopi som brukes når siden åpnes direkte
# som fil (file://), der fetch() av lokale JSON-filer ikke virker.
# Kjør dette etter hver endring i data/*.json:  ./scripts/sync-data.sh
set -euo pipefail
cd "$(dirname "$0")/.."

for navn in tidslinje budsjett; do
  json="data/$navn.json"
  js="data/$navn.js"
  if [ ! -f "$json" ]; then
    echo "Fant ikke $json" >&2
    exit 1
  fi
  if command -v python3 >/dev/null 2>&1; then
    if ! python3 -c 'import json, sys; json.load(open(sys.argv[1], encoding="utf-8"))' "$json"; then
      echo "Ugyldig JSON i $json – $js ble ikke oppdatert." >&2
      exit 1
    fi
  fi
  {
    printf '// Generert av scripts/sync-data.sh fra %s. Ikke rediger denne filen for hånd.\n' "$json"
    printf 'window.__DATA = window.__DATA || {};\n'
    printf 'window.__DATA.%s = %s;\n' "$navn" "$(cat "$json")"
  } > "$js"
  echo "Skrev $js"
done
