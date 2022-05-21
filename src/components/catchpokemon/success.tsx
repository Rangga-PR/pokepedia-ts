import React, { ChangeEvent, useState } from "react";
import Img from "../common/img";
import Flexbox from "../common/flexbox";
import Typo from "../common/typo";
import Input from "../common/input";
import Button from "../common/button";
import { ICatchedPokemon } from "../../interface";

interface CatchSuccessProps {
  onSave: Function;
  err?: string;
  pokemon: ICatchedPokemon;
}

const CatchSuccess = ({ pokemon, err, onSave }: CatchSuccessProps) => {
  const [name, setName] = useState(pokemon.name);
  const handleName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleSave = () => onSave({ ...pokemon, nickname: name });

  return (
    <Flexbox dir="column">
      <Typo ta="center">Gotcha!!</Typo>
      <Img src={pokemon?.sprites} w="120px" m="0 auto" />
      <Typo fs="12px" as="label" htmlFor="name">
        Beri dia nama
      </Typo>
      <Input id="name" value={name} onChange={handleName} m="4px 0" />
      <Flexbox h="10px">
        <Typo fs="10px" c="tomato" as="label" htmlFor="name">
          {err}
        </Typo>
      </Flexbox>
      <Button m="8px 0" onClick={handleSave} disabled={!name}>
        Simpan
      </Button>
    </Flexbox>
  );
};

export default CatchSuccess;
