---
name: deploying-to-production
description: Deploys a Vite/React project to GitHub and Cloudflare Pages. Use when the user says "deploy", "push to git", "push to cloudflare", "go live", "publish site", or "deploy to production". Handles git init, GitHub repo creation, local build, and Wrangler direct deploy.
---

# Deploy to GitHub + Cloudflare Pages

## When to use this skill
- User wants to push code to GitHub
- User wants to deploy to Cloudflare Pages
- User says "deploy", "go live", "push to git and cloudflare"
- First-time deployment of a new project
- Redeployment after code changes

## Pre-flight Checklist
Copy and update this checklist as you work:

```
- [ ] Git repo initialized
- [ ] .gitignore verified (node_modules, dist excluded)
- [ ] Git identity configured
- [ ] GitHub CLI available
- [ ] GitHub CLI authenticated
- [ ] GitHub repo created and code pushed
- [ ] Default branch set to `main`
- [ ] Project builds locally (`npm run build`)
- [ ] package-lock.json in sync
- [ ] Cloudflare Pages project created
- [ ] Production deployment successful
- [ ] Live site verified (HTTP 200)
```

## Critical: Windows Environment Gotchas

### PowerShell Constrained Language Mode
On this system, **PowerShell blocks `npm`, `npx`, and Node scripts** due to constrained language mode. Always prefix Node commands with `cmd /c`:

```bash
# WRONG - will fail in PowerShell
npm install
npx wrangler pages deploy dist

# CORRECT - use cmd /c prefix
cmd /c "npm install"
cmd /c "npx wrangler pages deploy dist"
```

> Native PowerShell commands (`git`, `Test-Path`, `Remove-Item`) work fine without `cmd /c`.

### GitHub CLI Path
After fresh install, `gh` is NOT on PATH until a new shell session. Use the full path:

```
& "C:/Program Files/GitHub CLI/gh.exe" <command>
```

## Workflow

### Phase 1: Git Setup

1. **Check for existing git repo:**
   ```bash
   git status
   ```

2. **Initialize if needed:**
   ```bash
   git init
   ```

3. **Verify `.gitignore`** contains at minimum:
   ```
   node_modules
   dist
   ```

4. **Set git identity** (check existing config first):
   ```bash
   git config user.name
   git config user.email
   ```
   If not set, configure using the GitHub username `iskandarzain`:
   ```bash
   git config user.name "iskandarzain"
   git config user.email "iskandarzain@users.noreply.github.com"
   ```

5. **Stage and commit:**
   ```bash
   git add -A
   git commit -m "Initial commit: <project-name>"
   ```

### Phase 2: GitHub Repo

1. **Check if GitHub CLI is installed:**
   ```bash
   & "C:/Program Files/GitHub CLI/gh.exe" --version
   ```
   If not found, install via winget:
   ```bash
   winget install --id GitHub.cli -e --accept-package-agreements --accept-source-agreements
   ```

2. **Check authentication:**
   ```bash
   & "C:/Program Files/GitHub CLI/gh.exe" auth status
   ```
   If not authenticated, trigger browser login:
   ```bash
   & "C:/Program Files/GitHub CLI/gh.exe" auth login --web --git-protocol https
   ```
   - This prints a one-time code and a URL
   - Tell user the code and URL, then wait for them to authorize
   - Monitor with `command_status` until done

3. **Create repo and push in one command:**
   ```bash
   & "C:/Program Files/GitHub CLI/gh.exe" repo create <repo-name> --public --source=. --remote=origin --push
   ```

4. **Rename branch to `main`** (Cloudflare expects `main` as production):
   ```bash
   git branch -m master main
   git push origin main
   & "C:/Program Files/GitHub CLI/gh.exe" repo edit iskandarzain/<repo-name> --default-branch main
   git push origin --delete master
   ```

### Phase 3: Build Locally

1. **Ensure lockfile is in sync:**
   ```bash
   cmd /c "npm install"
   ```
   If lockfile was regenerated, commit it:
   ```bash
   git add package-lock.json
   git commit -m "fix: sync package-lock.json"
   git push origin main
   ```

2. **Build the project:**
   ```bash
   cmd /c "npm run build"
   ```
   Verify the `dist/` directory was created.

### Phase 4: Cloudflare Pages Deploy

> **Strategy:** Use Wrangler direct deploy (build locally, upload `dist/`). Do NOT rely on Cloudflare's Git-connected auto-build — it uses `npm ci` which frequently fails on lockfile mismatches.

1. **Create the Cloudflare Pages project:**
   ```bash
   cmd /c "npx wrangler pages project create <project-name> --production-branch=main"
   ```
   - If wrangler auth is needed, it will open a browser automatically
   - Project name should be lowercase with hyphens (e.g., `serbuk-asamboi`)

2. **Deploy to production:**
   ```bash
   cmd /c "npx wrangler pages deploy dist --project-name=<project-name> --branch=main --commit-dirty=true"
   ```

3. **Verify the deployment:**
   ```bash
   cmd /c "curl -v https://<project-name>.pages.dev/ 2>&1"
   ```
   Look for `HTTP/1.1 200 OK` in the output.

### Phase 5: Subsequent Deploys (After Code Changes)

For future deployments after code changes:

```bash
git add -A
git commit -m "<commit message>"
git push origin main
cmd /c "npm run build"
cmd /c "npx wrangler pages deploy dist --project-name=<project-name> --branch=main --commit-dirty=true"
```

## Troubleshooting

### Build fails with lockfile error
```
npm error npm ci can only install packages when your package.json and package-lock.json are in sync
```
**Fix:** Delete and regenerate lockfile:
```bash
Remove-Item package-lock.json -Force
cmd /c "npm install"
git add package-lock.json
git commit -m "fix: regenerate package-lock.json"
git push origin main
```

### 522 Connection Timed Out on pages.dev
The production deploy went to wrong branch. Verify deployments:
```bash
cmd /c "npx wrangler pages deployment list --project-name=<project-name>"
```
If production branch is wrong, delete and recreate:
```bash
cmd /c "npx wrangler pages project delete <project-name> --yes"
cmd /c "npx wrangler pages project create <project-name> --production-branch=main"
cmd /c "npx wrangler pages deploy dist --project-name=<project-name> --branch=main --commit-dirty=true"
```

### GitHub CLI not on PATH after install
Use full path: `& "C:/Program Files/GitHub CLI/gh.exe"`

### Cloudflare dashboard blocked by bot detection
Skip the dashboard entirely. Use Wrangler CLI for all Cloudflare operations.

## Quick Reference

| Item | Value |
|------|-------|
| GitHub Username | `iskandarzain` |
| GitHub Email | `iskandarzain@users.noreply.github.com` |
| CF Account ID | `ed948d3dba7cd43938ffbef3a8fd225d` |
| CF Email | `iskandarzain@hotmail.com` |
| Production Branch | `main` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Deploy Command | `npx wrangler pages deploy dist --project-name=<name> --branch=main --commit-dirty=true` |
