#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://shreshth:123@localhost:5432/clubhouse",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
