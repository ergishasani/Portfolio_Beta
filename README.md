# Portfolio Beta

Fresh Next.js App Router + TypeScript + Tailwind CSS. Firebase stores project data;
ImgBB stores images. PROJECT.md records the ongoing project direction.

This local checkout is configured: Firebase project `portfolio-beta-f6469`,
Firestore Standard in Frankfurt (`europe-west3`) on Spark, published-project read
rules deployed, ImgBB key in `.env.local`, and the Admin credential in the ignored
`secrets/` folder. You can start coding immediately. The connection steps below
are reference instructions for another environment.

## Start building

Use Node.js 22+ (Node 24 recommended). Run npm run dev, open http://localhost:3000,
and edit src/app/page.tsx. Global styles and Tailwind tokens live in
src/app/globals.css; metadata lives in src/app/layout.tsx. Reusable components
belong in src/components/. No credentials are needed to run or build the starter.
On a new checkout, run npm install and copy .env.example to .env.local first.

## Connect Firebase on another environment

1. Create or select a project at https://console.firebase.google.com/.
2. Register a Web app under Project settings > General. Copy its config into the
   matching NEXT_PUBLIC_FIREBASE_* fields in .env.local.
3. Create the default Cloud Firestore database in production mode and choose a region.
4. Paste firestore.rules into Firestore > Rules and publish. Public reads are
   restricted to status: published; all client writes are denied. Manage content
   through the Console or the local Admin SDK script.
5. Restart the dev server after changing environment variables.

Alternatively deploy rules with the Firebase CLI:

```powershell
npx firebase-tools login
npx firebase-tools deploy --only firestore --project YOUR_PROJECT_ID
```

Firebase project portfolio-beta-f6469 (Portfolio Beta) is connected in .env.local.
Firebase web config is public by design; rules control access. Firebase Storage
is not needed because images live on ImgBB.

## Add projects and images

Upload pictures manually at https://imgbb.com/ and copy the direct image URL
(https://i.ibb.co/.../image.jpg). Create documents in the projects collection
using the fields in examples/project.json; the document ID should match slug.
Store URLs in coverImage and images, not image bytes or viewer-page links.
Set status to published when the record should be publicly readable.

For the optional command-line workflow:

1. Get a key at https://api.imgbb.com/ and set IMGBB_API_KEY in .env.local.
2. For Firestore writes, go to Firebase Project settings > Service accounts >
   Generate new private key. Create the ignored secrets folder and save the key
   as secrets/firebase-service-account.json. GOOGLE_APPLICATION_CREDENTIALS
   already points there. This key is only needed for the local save script.
3. Upload an image:

```powershell
npm run image:upload -- "C:/path/to/cover.jpg"
```

4. Copy examples/project.json to your own JSON file. Edit its fields and replace
   the sample image URL with the returned url, then save:

```powershell
npm run project:save -- examples/my-project.json
# Deliberately replace an existing record:
npm run project:save -- examples/my-project.json --replace
```

The upload command prints a direct image URL. The save command validates data,
uses slug as document ID, adds timestamps, and refuses accidental replacement.
Uploading and saving are separate; a failed save does not remove the uploaded
image. The example defaults to draft; change status to published to expose it.

## Read projects in your UI

The site uses a fixed bottom Dock for Home, Projects, About, and Contact. Project
cards use HoloCard, and OptionWheel filters records by `projectTypes`. Set that
field to an array containing one or more of `web`, `mobile`, and `desktop`.
Older records without this field default to `web`.

Until Firestore contains published records, the gallery shows explicitly labeled
CV previews with local illustrated covers. They are never saved to Firebase.
Once published records exist, the gallery shows those records instead. Use direct
ImgBB image URLs for their covers. If an image host prevents WebGL texture loading,
HoloCard retains the standard image as a fallback.

```tsx
import { getProjects, getProjectBySlug } from "@/lib/projects";

const projects = await getProjects();
const project = await getProjectBySlug("my-first-project");
```

The helpers fetch published records and validate the shared schema. Lists sort
by order, then title; no composite index is needed. Call them in a server
component or a client-side effect. Pages querying Firestore need configured
Firebase values; use export const dynamic = "force-dynamic" on a page for
per-request data instead of build-time fetching. The starter homepage does not
query Firestore.

next/image allows ImgBB's i.ibb.co host. Supply width and height, or use fill
inside a positioned container.

## Checks and deployment

```powershell
npm run lint
npm run typecheck
npm run build
```

Set public Firebase environment values on your host before building. Upload and
save commands run locally; the website needs no Admin credentials or ImgBB key.
Never put private credentials in NEXT_PUBLIC_ variables or commit key files.

Previous source: .backups/portfolio-before-reset.zip (local, ignored by Git).
The previous implementation also remains in Git history.
