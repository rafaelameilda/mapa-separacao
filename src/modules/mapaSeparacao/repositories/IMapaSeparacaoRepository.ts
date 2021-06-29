import { MapaSeparacao } from "../infra/oracle/entities/MapaSeparacao";

interface IFilters {
  data_ini: string;
  data_end: string;
  numtranswms: string;
}

interface IMapaSeparacaoRepository {
  getMapas(data: IFilters): Promise<MapaSeparacao[]>;
}

export { IMapaSeparacaoRepository, IFilters };
