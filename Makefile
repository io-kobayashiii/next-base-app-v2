psql-port:
	docker compose exec db sh -c 'printf "\ninclude '\''/workspace/postgresql.custom.conf'\''\n" >> /var/lib/postgresql/data/postgresql.conf'
