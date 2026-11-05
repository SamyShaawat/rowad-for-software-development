# Working rules

- Never do a task without a pull request. Create a branch from `dev`, push it, open a PR into `dev`, and merge it there. Never commit or push directly to `dev` or `main`.
- Never add a Claude co-author: no `Co-Authored-By: Claude` trailer in commits and no "Generated with Claude Code" line in PR descriptions.
- `dev` is the default branch and the deploy branch. CI/CD runs only when a PR is merged into `dev`, then deploys the build to cPanel over SSH.
- The contact form stays disabled until told otherwise (no reCAPTCHA site key is set in the build).
