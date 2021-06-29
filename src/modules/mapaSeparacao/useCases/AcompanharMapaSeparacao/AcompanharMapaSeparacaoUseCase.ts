import { inject, injectable } from "tsyringe";

import { MapaSeparacao } from "@modules/mapaSeparacao/infra/oracle/entities/MapaSeparacao";
import {
  IMapaSeparacaoRepository,
  IFilters,
} from "@modules/mapaSeparacao/repositories/IMapaSeparacaoRepository";

interface ICalcPercentual {
  atualP: string;
  totalP: string;
}

@injectable()
class AcompanharMapaSeparacaoUseCase {
  constructor(
    @inject("MapaSeparacaoRepository")
    private mapaSeparacaoRepository: IMapaSeparacaoRepository
  ) {}

  async execute({
    data_end,
    data_ini,
    numtranswms,
  }: IFilters): Promise<MapaSeparacao[]> {
    const mapas = await this.mapaSeparacaoRepository.getMapas({
      data_end,
      data_ini,
      numtranswms,
    });

    const mapasCalculados = await this.mapasMapeadosPercentual(mapas);

    return mapasCalculados;
  }

  async mapasMapeadosPercentual(
    mapas: MapaSeparacao[]
  ): Promise<MapaSeparacao[]> {
    const mapasCalculados = await Promise.all(
      mapas.map(async (mapa) => {
        const percOS118 = await this.calcularPercentual({
          atualP: mapa.totalConcluida118,
          totalP: mapa.total118,
        });

        const percOS109 = await this.calcularPercentual({
          atualP: mapa.totalConcluida109,
          totalP: mapa.total109,
        });

        const percOS29 = await this.calcularPercentual({
          atualP: mapa.totalConcluida29,
          totalP: mapa.total29,
        });

        const percOS110 = await this.calcularPercentual({
          atualP: mapa.totalConcluida110,
          totalP: mapa.total110,
        });

        const percOS111 = await this.calcularPercentual({
          atualP: mapa.totalConcluida111,
          totalP: mapa.total111,
        });

        const percOS119 = await this.calcularPercentual({
          atualP: mapa.totalConcluida119,
          totalP: mapa.total119,
        });

        const percOS113 = await this.calcularPercentual({
          atualP: mapa.totalConcluida113,
          totalP: mapa.total113,
        });

        return {
          ...mapa,
          percOS118,
          percOS109,
          percOS29,
          percOS110,
          percOS111,
          percOS119,
          percOS113,
        };
      })
    );

    return mapasCalculados;
  }

  async calcularPercentual({
    atualP,
    totalP,
  }: ICalcPercentual): Promise<number> {
    const atual = Number(atualP);
    const total = Number(totalP);
    const percentual = (atual / (total === 0 ? 1 : total)) * 100;

    return percentual || 0;
  }
}

export { AcompanharMapaSeparacaoUseCase };
