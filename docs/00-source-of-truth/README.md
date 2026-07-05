# Source of Truth

This section defines which project artifacts win when sources conflict.

Priority:
1. Accepted ADRs and canonical engineering documentation.
2. Actual merged repository implementation.
3. Canonical visual corpus and screen registry.
4. Set55 flow maps.
5. Sprint 0 source where not superseded.
6. Older reference designs.

The large visual corpus is not stored as ordinary Git blobs. Store it through Git LFS or GitHub Release assets and preserve artifact IDs.
