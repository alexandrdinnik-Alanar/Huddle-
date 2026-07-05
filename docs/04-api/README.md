# API

Canonical HTTP contracts live in `api-contract-map.csv`.

Rules: validate external input at the trusted boundary, authorize on the server, use idempotency where retries matter, persist canonical state before realtime broadcast, and keep domain rules out of route handlers.
