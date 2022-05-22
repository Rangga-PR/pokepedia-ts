export interface IType {
  type: { name: string; __typename: string };
  __typename: string;
}

export interface IStat {
  base_stat: number;
  stat: { id?: number; name: string; __typename: string };
  __typename: string;
}

interface IMoveVersionGroup {
  level_learned_at: number;
  move_learn_method: { name: string; __typename: string };
  __typename: string;
}

export interface IMove {
  move: { name: string; __typename: string };
  version_group_details: IMoveVersionGroup[];
  __typename: string;
}
