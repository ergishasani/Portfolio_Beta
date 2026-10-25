# Project direction

This portfolio is being rebuilt from scratch using Next.js App Router,
TypeScript, and Tailwind CSS. Firebase Cloud Firestore stores project records.
Images are hosted on ImgBB; store their direct HTTPS URLs in Firestore.
The old design and Sanity integration are retired. Build the new design
incrementally with the owner instead of restoring previous pages.

Keep ImgBB keys and Firebase Admin credentials out of browser code and Git.
The starter must run without configured external services.

Use a fixed bottom React Bits Dock for primary page navigation instead of a
top navbar. Project previews use React Bits HoloCard; React Bits OptionWheel
filters projectTypes (web, mobile, desktop). A project can have multiple types.
CV-based local previews are explicitly labeled and are replaced by published
Firestore records when records are available. Never auto-publish preview data.

The Dock uses a dark glass capsule, visible icon labels, and a violet active
state. Page content uses React ViewTransition fades and gentle vertical motion;
the Dock stays anchored. Respect reduced-motion preferences for all transitions.
