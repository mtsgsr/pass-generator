import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: medium;
  color: #817e91;
  text-align: center;
  margin: 1rem 0;
`;

const EmptyMsg = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #817e91;
  text-align: center;
  margin: 1rem 0;
`;

const Display = styled.div`
  background-color: #24232b;
  width: 500px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: relative;
  @media (max-width: 600px) {
    width: 95vw;
  }
`;

const ResultText = styled.p`
  width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 2rem;
  font-weight: 600;
  white-space: nowrap;
  color: #817e91;
  ::-webkit-scrollbar {
    display: none;
  }
  ::-ms-overflow-style {
    display: none;
  }
  scrollbar-width: none;
`;

const CopyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  font-size: 0.8rem;
  position: relative;
  &:before {
    content: "";
    display: none;
    position: absolute;
    bottom: 2.5px;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #a4ffaf;
  }
  &:hover:before {
    display: block;
  }
  &:after {
    content: ${(props) => props.text};
    display: none;
    position: absolute;
    bottom: -25px;
    padding: 0.25rem 0.5rem;
    background-color: #a4ffaf;
    color: #24232b;
  }
  &:hover:after {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Body = styled.div`
  background-color: #24232b;
  width: 500px;
  height: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  @media (max-width: 600px) {
    width: 95vw;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h2`
  color: #817e91;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const HeaderValue = styled.span`
  color: #a4ffaf;
  font-size: 1.6rem;
`;

const Slider = styled.input.attrs({ type: "range" })`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  width: 100%;
  height: 5px;
  background: ${(props) =>
    `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${props.value}%, #100F15 ${props.value}%, #100F15 100%);`};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  margin: 1rem 0;
  cursor: pointer;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-image: radial-gradient(circle, #d9d9d9 40%, #d9d9d9 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  &:focus::-webkit-slider-thumb {
    background: #000;
    border: 2px solid #a4ffaf;
  }

  ::-moz-range-thumb {
    width: 20px;
    height: 20px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #d9d9d9 40%, #d9d9d9 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }

  &:focus::-moz-range-thumb {
    background: #000;
    border: 2px solid #a4ffaf;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  color: white;
  font-size: 1rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  background: #a4ffaf;
  border: 2px solid #a4ffaf;
  cursor: pointer;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: #24232b;
  &:hover,
  :focus {
    background: none;
    color: #a4ffaf;
  }
`;

const StrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #18171f;
  padding: 1rem;
  height: 55px;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  border: 1.5px solid #fff;
  :checked {
    border-color: #a4ffaf;
    background-color: #a4ffaf;
  }
  :after {
    content: "✔";
    display: none;
    font-size: smaller;
    font-weight: bold;
    color: black;
  }
  :checked:after {
    display: block;
  }

  :hover {
    border-color: #a4ffaf;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 8px;
  width: fit-content;
  cursor: pointer;
`;

const StrText = styled.p`
  color: #817e91;
  font-size: 0.9rem;
`;

const LevelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StrLevel = styled.span`
  width: 10px;
  height: 25px;
  background-color: ${(props) => props.backgroundColor};
`;

export {
  Title,
  EmptyMsg,
  Display,
  ResultText,
  CopyBox,
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
};
