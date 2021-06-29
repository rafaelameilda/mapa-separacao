import { Router } from "express";

import { mapaRoutes } from "./mapaseparacao.routes";

const router = Router();

router.use("/mapa", mapaRoutes);

export { router };
