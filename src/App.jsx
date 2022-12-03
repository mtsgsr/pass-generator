import React from "react";
import "./App.css";
import {
  Title,
  EmptyMsg,
  Display,
  ResultText,
  Body,
  Header,
  HeaderTitle,
  HeaderValue,
  Slider,
  OptionsContainer,
  Button,
  StrContainer,
  Input,
  Label,
  StrText,
  LevelContainer,
  StrLevel,
} from "./styles.js";
import { FaRegCopy } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";

function App() {
  const lang = navigator.language || navigator.userLanguage;
  const [result, setResult] = React.useState("");
  const [value, setValue] = React.useState(1);
  const [checkedOptions, setCheckedOptions] = React.useState(["uppercase"]);
  const options = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%&'()*+,^-./:;<=>?[]_`{~}|",
  };

  const handleChange = ({ target }) => {
    const { value, checked } = target;
    if (checked) {
      setCheckedOptions([...checkedOptions, value]);
    } else {
      setCheckedOptions(checkedOptions.filter((option) => option !== value));
    }
  };

  const handleChecked = (checked) => {
    return checkedOptions.includes(checked);
  };

  function generateResult(length) {
    let result = "";
    const characters = checkedOptions
      .map((option) => options[option])
      .reduce((a, b) => a + b);
    let charactersLength = checkedOptions
      .map((option) => options[option].length)
      .reduce((a, b) => a + b);
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleClick = (event) => {
    event.preventDefault();
    if (checkedOptions.length !== 0) setResult(generateResult(value));
  };

  return (
    <div className="App">
      <Title>
        {lang === "pt-BR" ? "Gerador de Senhas" : "Password Generator"}
      </Title>
      {checkedOptions.length === 0 && (
        <EmptyMsg>
          {lang === "pt-BR"
            ? "Marque pelo menos uma opção"
            : "Select at least one option"}
        </EmptyMsg>
      )}
      <Display>
        <ResultText>{result}</ResultText>
        <FaRegCopy
          size={20}
          color="#A4FFAF"
          onClick={() => navigator.clipboard.writeText(result)}
          style={{ cursor: "pointer" }}
        />
      </Display>
      <Body>
        <Header>
          <HeaderTitle>
            {lang === "pt-BR" ? "Quantidade de caracteres" : "Character Length"}
          </HeaderTitle>
          <HeaderValue>{value}</HeaderValue>
        </Header>
        <Slider
          min="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <OptionsContainer>
          <Label>
            <Input
              type="checkbox"
              value="uppercase"
              onChange={handleChange}
              checked={handleChecked("uppercase")}
            />
            {lang === "pt-BR"
              ? "Incluir letras maiúsculas"
              : "Include Uppercase Letters"}
          </Label>
          <Label>
            <Input type="checkbox" value="lowercase" onChange={handleChange} />
            {lang === "pt-BR"
              ? "Incluir letras minúsculas"
              : "Include Lowercase Letters"}
          </Label>
          <Label>
            <Input type="checkbox" value="numbers" onChange={handleChange} />
            {lang === "pt-BR" ? "Incluir números" : "Include Numbers"}
          </Label>
          <Label>
            <Input type="checkbox" value="symbols" onChange={handleChange} />
            {lang === "pt-BR" ? "Incluir símbolos" : "Include Symbols"}
          </Label>
        </OptionsContainer>
        <StrContainer>
          <StrText>{lang === "pt-BR" ? "FORÇA" : "STRENGTH"}</StrText>
          <LevelContainer>
            {value >= 4 && checkedOptions.length >= 1 && (
              <StrLevel backgroundColor="#f7cd69" />
            )}
            {value >= 8 && checkedOptions.length >= 1 && (
              <StrLevel backgroundColor="#f7cd69" />
            )}
            {value >= 12 &&
              checkedOptions.length >= 1 &&
              checkedOptions.map(
                (level, index) =>
                  index >= 0 &&
                  index <= 1 && (
                    <StrLevel key={level} backgroundColor="#f7cd69" />
                  )
              )}
          </LevelContainer>
        </StrContainer>
        <Button onClick={handleClick}>
          {lang === "pt-BR" ? "Gerar" : "Generate"}{" "}
          <BsArrowRightShort size={20} />
        </Button>
      </Body>
    </div>
  );
}

export default App;
