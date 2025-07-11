export type Pokemon = {
  name: String;
  rank: number;
  search: String;
  raw: number;
  percent: number;
  types: String[];
  stats: {
    hp: number;
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
  };
};
