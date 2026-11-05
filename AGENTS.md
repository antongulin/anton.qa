# AGENTS.md - anton.qa

Repository contract for any AI coding agent working here. Read this file and the shared workflow it
links before editing.

This file adapts the DOX framework from `agent0ai/dox` at revision
`765ae4ac02cc884eefcd41a3d0f71941721adb89` (retrieved 2026-11-05 UTC). The upstream MIT notice is
kept verbatim in `docs/dox-LICENSE.txt`.

## Purpose

An archived single-page React portfolio for Anton Gulin. `src/index.js` mounts `<App>` into `#root`,
and `src/App.js` renders `Navbar`, `Home`, `About`, `SdetSkills`, `FullStackSkills`, `Projects`, and
`Contact` in that order. `Navbar` carries the in-page anchor links, a fixed social-link rail
(LinkedIn, GitHub, email, scheduling), and the logo. Content sections read from `src/data/skills.js`
and `src/data/projects.js`.

This repository is a **legacy artifact**. It was bootstrapped as a 2023 CRA build and is normally
archived on GitHub. The current website is maintained in a separate repository,
https://github.com/antongulin/anton-qa-2026, and is not built from this tree. Treat work here as
historical source maintenance, not as work on the live site.

The obsolete 2023 resume download and its Navbar and sitemap links are retired. The PDF was removed
from this tree; Git history retains it. Do not restore it, and do not relabel stale material as a
current resume.

The repository is normally **archived** on GitHub. For an authorized publication, temporarily
unarchive it only when necessary, then restore and verify the original archive state afterward.
Reuse existing task authorization, and preserve archive state during local-only work.

## Ownership

Maintained by Anton Gulin (`i@anton.qa`, https://anton.qa). Follow Anton's task scope and standing
publication and merge authority in the shared workflow. The public identity in metadata, README, and
rendered strings is **Anton Gulin**; preserve historical Git authorship rather than rewriting
history.

## Local Contracts

Small, flat tree. The files that carry the contracts:

- `AGENTS.md` - this contract.
- `docs/dox-LICENSE.txt` - verbatim MIT notice for the DOX text adapted here.
- `package.json` - notice-style npm metadata, not a published package: `private: true`, name
  `antongulin.github.io`, and `homepage` `https://anton.qa`. Scripts are `start`, `build`, `test`,
  `eject`, `predeploy`, and `deploy` (`gh-pages -d build`). Runtime dependencies are React 18,
  react-icons, react-scroll, react-scripts 5.0.1, and web-vitals; dev dependencies are `gh-pages`
  and Tailwind 3.3.
- `public/` - static assets copied verbatim into the build: `index.html` (Google Analytics tag and a
  third-party `nytsys` script), `favicon.png`, `logo192.png`, `logo512.png`, `manifest.json`,
  `robots.txt`, and `sitemap.xml` (two `<url>` records: the site root and `/qr-code-component/`). The
  retired resume record was removed together with its PDF.
- `src/components/Navbar.jsx` - imports `FaBars`, `FaTimes`, `FaGithub`, `FaLinkedin`,
  `HiOutlineMail`, `GrSchedule`, and the logo, plus `Link` from `react-scroll`. It holds both the
  desktop menu and the mobile menu state.
- `src/components/` - the six content sections, and `src/data/` - the skills and projects content.
- `src/assets/` - tracked tool and project logos referenced by the skills and projects sections.
  Binary; do not regenerate or recompress as a side effect of a text change.
- `src/index.css` and `tailwind.config.js` - the Tailwind layer. The content glob covers the source
  templates, so classes used in components are scanned.
- `.github/workflows/code-review.yml` - the Robin review caller. It calls
  `antongulin/robin/.github/workflows/review.yml@main` on `pull_request` and `issue_comment`, and
  passes the `LLM_API_KEY`, `LLM_BASE_URL`, and `LLM_MODEL` secrets.
- `.github/workflows/deploy.yml` - a legacy GitHub Pages-era deploy that now targets Cloudflare
  Pages project `anton-qa`. It is known broken and is not part of normal work here; see Work
  Guidance.
- `.gitignore` - ignores `/node_modules`, `/build`, `/coverage`, local env files, and editor and
  system files.

Configuration and side effects:

- There is **no lockfile** in this repository and no committed build output. A fresh checkout has no
  `node_modules`, so any build, test, or serve needs an install first, which needs task
  authorization. Do not generate a lockfile as a side effect of a metadata change.
- `build/` and `node_modules/` are generated and gitignored; never commit them.
- The review workflow reads repository secrets. Never print, log, or commit secret values.
- `sitemap.xml` lists public routes. Removing a page means removing its record; adding a route means
  adding one.

## Work Guidance

- Inspect the real files before changing them. Most tasks here change one string, one route record,
  one JSX block, or one workflow input; keep the diff that small.
- Identity and attribution are literal text. The public name is Anton Gulin. Do not reintroduce the
  legacy name in metadata, README copy, or rendered strings. Historical Git authorship stays as it
  is.
- `package.json` is a contract file. Change only the field the task names, and never run an install,
  upgrade, or dependency change as a side effect of a metadata edit.
- When retiring a link, remove the whole unit: the Navbar `<li>` wrapper, its icon import if that
  import becomes unused, and the matching `sitemap.xml` record. Leaving one half breaks the others.
  Preserve every remaining link, attribute, and handler byte for byte.
- GitHub Actions: new or changed jobs use the standard Ubicloud runner, `runs-on:
  ubicloud-standard-2`. The review workflow is a reusable-workflow caller, so the label goes through
  its `runner` input as a JSON-encoded string: `runner: '"ubicloud-standard-2"'`.
- The Robin caller needs `actions: read`, `contents: read`, and `pull-requests: write`. The reusable
  workflow declares all three and reads `actions` to detect superseded runs; a caller can only
  narrow a callee's permissions, so keep them aligned.
- `deploy.yml` is out of scope for source and metadata work. It uses a GitHub-hosted `ubuntu-latest`
  runner, Node 16, and a step that deletes `package-lock.json` before running `npm ci` with no tracked
  lockfile, so it cannot install. Do not repair, modernize, or execute it as part of an unrelated
  change, and do not treat a green or red run of it as evidence about this tree. An authorized
  publication must first establish a hold on it and restore its prior state afterward.
- Merge strategy: squash by default for one cohesive PR. That default is subject to the gates that
  actually apply. This repository is normally archived. Prior lead evidence recorded `main`
  protection requiring a pull request, zero required approving reviews, and no required status
  checks, but that is prior evidence and not a live reading. Verify permitted methods and current
  gates before merging, and do not change repository settings as a side effect of a content change.
- Publication here is source publication of an archived repository. Do not claim a live URL, a new
  deployment, or a successful build unless that was actually established; the Cloudflare Pages
  binding for this tree is unverified.
- Keep stable rules here and execution evidence in task records. When Anton requests a durable
  behavior change, record it here or in the relevant child contract.
- Shared workflow rules are not duplicated here. Read `~/.agents/instructions/WORKFLOW.md`, or
  https://github.com/antongulin/baseline/blob/main/baseline/02-agents.md when that file is absent.

## Verification

Run only what the change can break.

- `python3 -c "import json; json.load(open('package.json'))"` - confirms the manifest still parses.
- `python3 -c "import xml.etree.ElementTree as E; E.parse('public/sitemap.xml')"` - confirms the
  sitemap is still well-formed XML.
- `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/code-review.yml'))"`, or Ruby
  `Psych` where PyYAML is absent - confirms a workflow edit still parses as YAML.
- `git diff --check` - catches whitespace damage.
- `grep -rn Resume src/components/Navbar.jsx public/sitemap.xml` - returns nothing once the retired
  download is fully removed. Use this shape for any retired route.
- `npm ci` is not runnable here: there is no lockfile. `npm install` would create one and change the
  tree. `npm start`, `npm run build`, and `npm test` all need an install and task authorization, and
  there are no test files for the `test` script to run. If you install and build, report it as an
  exercised check; without that, say the check is static only.
- CI: the only workflow that runs on a pull request is the Robin reviewer. It does not build or test
  the app, so a green run says nothing about compilation or the rendered page. `deploy.yml` runs on
  pushes to `main` and is broken; a failing run there is the known state, not a new defect.

## DOX discipline

- `AGENTS.md` files are binding contracts for their subtrees. Before editing, read this root and
  every applicable child contract; the nearest contract adds local detail without weakening DOX.
- After a meaningful change, reconcile the affected contracts, file indexes, and human documentation.
  Changes to purpose, structure, commands, permissions, or durable workflow rules belong here.
- Add a child `AGENTS.md` only for a durable ownership boundary with its own rules, materials, or
  quality standards. Its sections are Purpose, Ownership, Local Contracts, Work Guidance,
  Verification, and Child DOX Index, and the parent indexes each direct child.
- Before closeout, recheck the changed paths against this contract, refresh any affected index, run
  the relevant existing checks, and report documents intentionally left unchanged with the reason.

## Child DOX Index

None. The tree is flat and small enough that this root file is the whole contract.
