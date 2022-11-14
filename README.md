# unicon-lsp

# Unicon Language Server Development

Pre-requisites: git, node, unicon, and VScode installed

# Description

This repo contains both the client and server... 

# Setup

### Important notes before we begin: <br />

> 1. .gitignore contains (among others) node_modules and out folders.<br />
> 2. node_modules will hold all dependencies required within the main directory and the client subfolder (you will notice a node_modules folder within each of these directories). <br />
> 3. out holds the transpiled code (Typescript --> Javascript) following build/watch script execution. <br />

### Acquiring dependencies: <br />

> 1. Move to the main directory `cd /path_to_repo/` <br />
> 2. Run command: `npm i` to install all dependencies required within the main directory. <br />

### Client setup: <br />

> 1. Move to the client subfolder `cd /path_to_repo/client/` <br />
> 2. Run command: `npm i` to install all dependencies required within the client subfolder. <br />
> 3. Change server command path in extension.ts: <br /> 
> > 3a) navigate to `/path_to_repo/client/src/extension.ts` file <br />
> > 3b) Edit line 24 (alter path within <...>, requires absolute path) --> <br />`const unicon: Executable = { command: '</ABSOLUTE_PATH_TO_REPO_DIRECTORY/server/unicon-lsp-server>', transport: transport };`

### Server setup: <br />

> 1. Move to the server folder: `cd /path_to_repo/server` <br />
> 2. Build server: `unicon unicon-lsp-server.icn`


# Run and Debug

We can test our server using the run and debug feature in VS code. 
<br />

### Getting Started

> You can find the "Run and Debug" option on the left navigation bar in VS code (see Figure 1).
<br />

Figure 1: Run and Debug Navigation Selection <br />
![image](https://user-images.githubusercontent.com/80660221/201660824-6663ce74-2ea7-4c43-9b7c-9faac265384d.png)
<br /><br />

> After selecting the Run and Debug option, you should see a change in the panel to the right of the nav bar (see Figure 2).
<br />

Figure 2: Run and Debug Display
<br />
![image](https://user-images.githubusercontent.com/80660221/201667266-6414652c-848f-43e8-808a-5edbcd64e365.png)
<br />
<br />

> From the drop down menu indicated by the red arrow in Figure 2, select the "Launch Client" option then press F5 or the green button to the left to start. You will see a new separate "Extension Development Host" vscode window appear as indicated in Figure 3 (below). This serves as our playground for testing the unicon language server. 

<br />
Figure 3: New Extension Host Window After Launch 
<br />

![image](https://user-images.githubusercontent.com/80660221/201666703-3e416cf8-1ee4-4d25-a114-2421e61fbda5.png)

<br /><br />

> 



