import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("VW_MONITOR_MAPA_SEPARACAO_INDUSTRIA")
class MapaSeparacao {
  @PrimaryColumn({ name: "NUMTRANSWMS" })
  numtranswms: string;

  @Column({ name: "PERC" })
  perc: number;

  @Column({ name: "M3TOTAL" })
  m3total: string;

  @Column({ name: "PESOTOTAL" })
  pesototal: string;

  @Column({ name: "TOTAL" })
  total: string;

  @Column({ name: "FINALIZADO" })
  finalizado: string;

  @Column({ name: "TEMPOAPROX" })
  tempoaprox: string;

  @Column({ name: "DATA" })
  data: string;

  @Column({ name: "DTINICIOPRIOS" })
  dtinicioprios: string;

  @Column({ name: "totalConcluida118" })
  totalConcluida118: string;

  @Column({ name: "total118" })
  total118: string;

  @Column({ name: "totalConcluida109" })
  totalConcluida109: string;

  @Column({ name: "total109" })
  total109: string;

  @Column({ name: "totalConcluida29" })
  totalConcluida29: string;

  @Column({ name: "total29" })
  total29: string;

  @Column({ name: "totalConcluida110" })
  totalConcluida110: string;

  @Column({ name: "total110" })
  total110: string;

  @Column({ name: "totaOSGeral" })
  totaOSGeral: string;

  @Column({ name: "totalConcluida111" })
  totalConcluida111: string;

  @Column({ name: "total111" })
  total111: string;

  @Column({ name: "totalConcluida119" })
  totalConcluida119: string;

  @Column({ name: "total119" })
  total119: string;

  @Column({ name: "totalConcluida113" })
  totalConcluida113: string;

  @Column({ name: "total113" })
  total113: string;
}

export { MapaSeparacao };
