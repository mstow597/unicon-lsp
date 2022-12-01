progs=unicon-lsp-server
src=unicon-lsp-server.icn workspace.icn
default=$(progs)

export IPATH=/home/mark/Documents/unicon/uni/unidoc

unicon-lsp-server:unicon-lsp-server.icn workspace.u
	unicon -u unicon-lsp-server.icn 

workspace.u:workspace.icn
	unicon -u -c workspace.icn

clean:
	rm -f *.u unicon-lsp-server uniclass*