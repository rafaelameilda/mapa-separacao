import { ConnectionOptions } from "typeorm";

const dbConfig: ConnectionOptions[] = [
  {
    name: "default",
    type: "oracle",
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    sid: process.env.DB_SID,
    entities: ["./src/modules/**/entities/*.ts"],
  },
  {
    name: "BaseTeste",
    type: "oracle",
    port: Number(process.env.DBT_PORT),
    host: process.env.DBT_HOST,
    username: process.env.DBT_USER,
    password: process.env.DBT_PASS,
    sid: process.env.DBT_SID,
    entities: ["./src/modules/**/entities/*.ts"],
  },
];

export { dbConfig };
