import { Router } from "express";

import { AcompanharMapaSeparacaoController } from "@modules/mapaSeparacao/useCases/AcompanharMapaSeparacao/AcompanharMapaSeparacaoController";

const mapaRoutes = Router();

const acompanharMapaSeparacaoController =
  new AcompanharMapaSeparacaoController();

mapaRoutes.get("/all", acompanharMapaSeparacaoController.handle);

export { mapaRoutes };
