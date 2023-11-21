
## Ideas

- Improve `.gitignore` & `.dockerignore`
- Fix Go bins path
- Bind mount Go host cache to speed up dev builds
- Fix remaining bugs caused by dockerization
- Properly separate dev, prod environments
- Proper bind mounts for persisting those sweet datasets
- Reverse proxy with auto ACME/Let's Encrypt for self-hosting
- Fix all env variables pertaining to user API keys
- Move all vars to `.env` files and add dotenv support to poetry, npm, & Go envs where necessary and to specific containers
- Make tools more Unix-like with a barrage of search/replace
- Move all tools configs to `./configs`
- Multistage Builds for smaller images
- Add `zsh` as shell with a minimal set of features
- Add `wordlist-manager` to remove unnecessary data from repo & make repo as slim as possible
- Write great documentation
- Ansible playbook for deploying to Kali/Ubuntu/Arch/RHEL
- Maybe Terraform for ensuring automatic deployment to various hosters
- Update all dependencies for npm, poetry
- Pin dependencies for npm, poetry
- Tooling improvements
- Proper container hardening for self-hosting, especially UID:GID & `cap_drop` & maybe podman (SoC)
- Less redundancy & general cleanup
- Docker Hub release
- Additional utility containers
- Structured Logging & Colorful output, plus `lnav`
- Scheduler
- k3s deployment for scaling scanners
- More UI development - slim, efficient, performant but still shiny
- LLM integration

### VPNs - Proxies

- [ProtonVPN Docker](https://github.com/tprasadtp/protonvpn-docker)
- [Gluetun Docker](https://hub.docker.com/r/qmcgaw/gluetun)

## Projects that might be replaced due to lack of maintenance

- [dnmasscan on GitHub](https://github.com/rastating/dnmasscan)
