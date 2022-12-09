progs=launch-lsp
src=launch-lsp.icn workspace.icn server.icn database.icn completion.icn
default=$(progs)

export IPATH=/home/mark/Documents/unicon/uni/unidoc

launch-lsp:launch-lsp.icn workspace.u server.u database.u completion.u
	unicon -u launch-lsp.icn

workspace.u:workspace.icn
	unicon -u -c workspace.icn

server.u:server.icn
	unicon -u -c server.icn

database.u:database.icn
	unicon -u -c database.icn

completion.u: completion.icn
	unicon -u -c completion.icn

clean:
	rm -f *.u launch-lsp uniclass*