import React from "react";
import ProgressBar from "../common/progressbar";
import Flexbox from "../common/flexbox";
import Typo from "../common/typo";
import Skeleton from "../common/skeleton";
import { Stat } from "../../interface";

interface PokemonStatProps {
  stat?: Stat[];
  color?: string;
  loading?: boolean;
}

const PokemonStat = ({ stat, color, loading, ...props }: PokemonStatProps) => {
  return (
    <Flexbox dir="column" p="16px" {...props}>
      <Typo as="h2" m="0 0 16px 0">
        Stats
      </Typo>

      {loading
        ? [1, 2, 3, 4, 5, 6].map((v) => (
            <Skeleton
              key={v}
              h="8px"
              br="6px"
              w="100%"
              m="8px 0"
              data-testid="stat-loading"
            />
          ))
        : stat?.map((s) => (
            <Flexbox dir="column" m="2px 0" key={s?.name}>
              <Flexbox jc="space-between" m="0 0 4px 0">
                <Typo fs="12px" fw="600">
                  {s.name}
                </Typo>
                <Typo fs="12px" fw="600">
                  {s.stat}
                </Typo>
              </Flexbox>
              <ProgressBar progress={s.stat} color={color} />
            </Flexbox>
          ))}
    </Flexbox>
  );
};

export default PokemonStat;
