# unicon-lsp
# Unicon Language Server Development
Pre-requisites: git, node, unicon, and VScode installed
# Description
This repo contains both the client and server. All code/files relevant to the client are contained within the main directory; whereas, the server code is contained within /path_to_repo/server directory. * (return to this later to package all client code in its own folder - requires edits to config file(s)).
# Client Setup

Notes: <br />
> 1) .gitignore contains node_modules and out folders.<br />
> 2) node_modules will hold all dependencies required by the client. <br />
> 3) out holds the transpiled code (Typescript --> Javascript)
We acquire our dependencies through the steps below: <br />
> 1) Move to client folder `cd /path_to_repo` <br />
> 2) Run command: `npm i` <br /> 
Note: package.json contains the names of all required dependencies. When we run npm i, our package manager finds and installs all of these dependencies into the node_modules folder.

# Server setup
Steps to set up our server: <br />
> 1) Move to the server folder: `cd /path_to_repo/server` <br />
> 2) Build server: `unicon unicon-lsp-server.icn`
