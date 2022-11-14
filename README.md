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

- You can find the "Run and Debug" option on the left navigation bar in VS code (see Figure 1).
<br />

Figure 1: Run and Debug Navigation Selection
![tempsnip](https://user-images.githubusercontent.com/80660221/201693239-13e15660-fec9-45fb-8945-217ed49a40dc.png)

<br /><br />

- After selecting the Run and Debug option, you should see a change in the panel to the right of the nav bar (see Figure 2).
<br />

Figure 2: Run and Debug Display
![tempsnip](https://user-images.githubusercontent.com/80660221/201693976-965d96cd-a63a-448b-9fe5-98bd26e73895.png)

<br />
<br />

- From the drop down menu indicated by the yellow arrow in Figure 2, select the "Launch Client" option then press F5 or the green button to the left to start. You will see a new separate "Extension Development Host" vscode window appear as indicated in Figure 3 (below). This serves as our playground for testing the unicon language server. 

<br />
Figure 3: New Extension Host Window After Launch 
<br />

![image](https://user-images.githubusercontent.com/80660221/201689356-331dcb3b-6153-477e-94d3-7b644cacc84a.png)

<br /><br />

### Working with the Extension Development Host

- After launching the extension development host using the steps above, you should see a vs code window similar to that in figure 3. <br />
- We have configured our client to trace the communication between server and client. This can be found in the package.json file in the root directory of our project (under "contributes" property). <br />
- To access the trace logs, we must have a vs code integrated terminal window open. The terminal appears at the bottom of your vs code window by default and is shown in figure 4 (below). If you do not see this window, use the shortcut:  ``ctrl + shift + ` `` or 



<br /> 

![tempsnip](https://user-images.githubusercontent.com/80660221/201691900-a787a448-1d30-483b-82c7-f3aa1dab8b21.png)



