import { Request, Response } from "express";
import { container } from "tsyringe";

import { AcompanharMapaSeparacaoUseCase } from "./AcompanharMapaSeparacaoUseCase";

class AcompanharMapaSeparacaoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { data_end, data_ini, numtranswms } = request.query;

    const acompMapaSeparacaoUseCase = container.resolve(
      AcompanharMapaSeparacaoUseCase
    );

    const acompanhamento = await acompMapaSeparacaoUseCase.execute({
      data_end: data_end as string,
      data_ini: data_ini as string,
      numtranswms: numtranswms as string,
    });

    return response.json(acompanhamento);
  }
}

export { AcompanharMapaSeparacaoController };
