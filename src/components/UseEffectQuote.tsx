
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ComponentText = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: deeppink;
  margin: 0;
`;

const CharacterResults = styled.div`
  background-color: #222222;
  margin: 10px 0;
  padding: 8px 8px;
  border: 3px solid;
  border-image: linear-gradient(to bottom right, cyan, deeppink) 1;
  border-radius: 3px;
`;

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
}

function EffectComponent() {
  const [character, setCharacter] = useState<Character>({
    name: "",
    height: "",
    mass: "",
    birth_year: "",
  });

  const [id, setId] = useState("");
  
  useEffect(() => {
    if (!id) return;
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <div>
      <label htmlFor="idInput">Enter a character ID:</label>
      <input type="text" id="idInput" value={id} onChange={handleChange} />
      {character.name && (
        <CharacterResults>
          <ComponentText>{character.name}</ComponentText>
          <ComponentText>Height: {character.height}</ComponentText>
          <ComponentText>Mass: {character.mass}</ComponentText>
          <ComponentText>Birth Year: {character.birth_year}</ComponentText>
        </CharacterResults>
      )}
    </div>
  );
}

export default EffectComponent;
