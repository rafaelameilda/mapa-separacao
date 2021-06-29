import { container } from "tsyringe";

import { MapaSeparacaoRepository } from "@modules/mapaSeparacao/infra/oracle/repositories/MapaSeparacaoRepository";

container.registerSingleton<MapaSeparacaoRepository>(
  "MapaSeparacaoRepository",
  MapaSeparacaoRepository
);
