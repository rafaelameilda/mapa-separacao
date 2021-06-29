import { createConnection, getRepository, Repository } from "typeorm";

import {
  IMapaSeparacaoRepository,
  IFilters,
} from "@modules/mapaSeparacao/repositories/IMapaSeparacaoRepository";

import { MapaSeparacao } from "../entities/MapaSeparacao";

class MapaSeparacaoRepository implements IMapaSeparacaoRepository {
  private repository: Repository<MapaSeparacao>;

  constructor() {
    this.repository = getRepository(MapaSeparacao);
  }

  async getMapas({ numtranswms }: IFilters): Promise<MapaSeparacao[]> {
    // aqui, ao inves de fazer o createconection eu gostaria de utilizar o repository

    const connection = await createConnection("Japao");

    const mapas = await connection.manager.query(this.consultaMapasSql());

    await connection.close();

    return mapas;
  }

  consultaMapasSql(): string {
    const sql = `select vw.* from vw_monitor_mapa_separacao_industria vw  order by 1`;
    return sql;
  }
}

export { MapaSeparacaoRepository };
