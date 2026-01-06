https://lucas-josephh.github.io/portfolio

## API Node.js + PostgreSQL

Un serveur Express + Postgres est disponible dans `server/` pour alimenter le front.

### Démarrage
- `cd server`
- `npm install`
- Créez la base `portfolio` (ou autre) dans Postgres
- Exécutez le script `schema.sql` pour créer/peupler les tables
- Exportez `DATABASE_URL` (ou ajoutez-le dans un `.env`) puis `npm start` (http://localhost:3000)

Variables attendues :
- `DATABASE_URL=postgresql://user:password@host:5432/portfolio`
- `PORT=3000` (optionnel)
- `PGSSL=false` (mettez `true` si l’hébergeur impose SSL)

### Endpoints
- `GET /getData?table=project|skill[&id=1]`
- `POST /addData` body `{ table, data }`
- `PUT /updateData` body `{ table, id, data }`
- `DELETE /deleteData` body `{ table, id }`

Tables :
- `project`: `id_project`, `title`, `status`, `description`, `url`, `technologie` (text[]), `demo`, `github`
- `skill`: `id_skill`, `name`, `categorie` (Frontend|Backend|DevOps|Autre|Base de données), `level` (0-100)