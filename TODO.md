## TODO: This is non exhaustive list of incoming fixes/features. No promises.No ETA.



## known bugs






## ideas
fix go bins path
bind mount go host cache to speed up dev builds
fix remaining bugs caused by dockerization.
properly separate dev,prod
proper bind mounts for persisting those sweet datasets.
reverse proxy with auto acme/lets-encrypt for self-hosting
fix all env variables pertaining to user API keys
move all vars to .envs and add dotenv to poetry,npm & go envs where necessary and to specific containers.
barrage of search/replace to make stuff moar unixy.
move all tools configs to ./configs
Multistage Builds
Smaller images
add zsh as shell with minimal set of features.
write great docs
Ansible playbook for deploying to Kali/Ubuntu/Arch/RHEL
maybe terraform to ensure automatic deployment to various hosters
Update all dependencies npm,poetry
Pin dependencies npm,poetry
tooling improvements.
Proper container hardening for self-hosting especially UID:GID & cap_drop & maybe podman (SoC)
Less redundancy & general cleanup
Docker Hub release
Additional utility containers 
Structured Logging & Colorful output. plus lnav
Scheduler
k3s deployment for scaling scanners
more UI development. slim, efficient & performant but still shiny.
LLM integration.



### VPNS - PROXIES
https://github.com/tprasadtp/protonvpn-docker

https://hub.docker.com/r/qmcgaw/gluetun




## The following projects might be replaced because they are not actively maintained


https://github.com/rastating/dnmasscan