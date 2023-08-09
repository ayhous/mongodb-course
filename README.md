# ia-mongodb-cours-2021

commnde docker compose up -d pour installer le serveur et -d pour reste en start en arriere plan


--se connecter a l environement ou y a la base de donnée
Docker exec –it mongo-db /bin/bash

/la connexion a la db
mongosh --username root --authenticationDatabase admin --password 
password utilisé test 123*

### commande utiles :
  *show dbs liste les db existante
  *use <db>    se connecte a une db
  *show collections: lister les collections 
  *db.nomdecollection   unexiote dbe exist si elle contiens au moin une collections.
## dossier workspace 
   ce dossier est monté dans le container ,il est accessible dans le conainter dans workspace

   ## raccourci
   lorsque vous etes