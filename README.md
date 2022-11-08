# unicon-lsp

# Unicon Language Server Development

Pre-requisites: git, node, unicon, and VScode installed

# Description

This repo contains both the client and server... 

# Setup

Important notes before we begin: <br />

> 1. .gitignore contains (among others) node_modules and out folders.<br />
> 2. node_modules will hold all dependencies required within the main directory and the client subfolder (you will notice a node_modules folder within each of these directories). <br />
> 3. out holds the transpiled code (Typescript --> Javascript) following build/watch script execution. <br />

Acquiring dependencies: <br />

> 1. Move to the main directory `cd /path_to_repo/` <br />
> 2. Run command: `npm i` to install all dependencies required within the main directory. <br />

Client setup: <br />

> 1. Move to the client subfolder `cd /path_to_repo/client/` <br />
> 2. Run command: `npm i` to install all dependencies required within the client subfolder. <br />

Server setup: <br />

> 1. Move to the server folder: `cd /path_to_repo/server` <br />
> 2. Build server: `unicon unicon-lsp-server.icn`


# Run and Debug
