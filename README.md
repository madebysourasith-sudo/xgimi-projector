# XGIMI — Cinema, made personal

A cinematic projector landing page with interactive 3D models.

Import `index.html` into Aura. The HTML is under 5 MB and loads images, textures, fonts and video from the owner’s Aura media library. The two models are Meshopt-compressed and hosted on GitHub through jsDelivr; their combined compressed size is 5.31 MB, down from 26.36 MB. Mesh geometry is retained with reduced numeric precision. The full media collection is separate from the HTML import and is not a standalone package under 5 MB.

Public Aura media URLs are listed in `aura-asset-urls.json`. Serve the HTML over HTTP(S) for local previews. The original model revisions remain recoverable in Git history.

Meshoptimizer is distributed under the MIT license; see `LICENSE-meshoptimizer.txt`.
