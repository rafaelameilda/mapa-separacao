import { Connection, createConnections } from "typeorm";

import { dbConfig } from "../../../../TSOrmConfig";

export default async (): Promise<Connection[]> => {
  const connections = await createConnections(dbConfig);

  return connections;
};
