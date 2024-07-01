## Prisma ORM

Install the Prisma CLI as a development dependency in the project:

```sh
npm install prisma --save-dev
```

Set up Prisma with the init command of the Prisma CLI:

```sh
npx prisma init --datasource-provider postgresql
```

This is the lib which performs the connection and query to the DB

```sh
npm i @prisma/client
```

To Migrate the prisma to equivalent SQL queries

```sh
npx prisma migrate dev
```

After creating the migration, to use the functions for that particular migrations to be suggested by prisma. We have to generate prisma (@prisma/client)

```sh
npx prisma generate
```
