import React, { createContext } from "react";

interface GenerateContextData {
  text: string;
  level: string;
  margin: number;
  scale: number;
  width: number;
  color: {};
}

const GenerateContext = createContext<GenerateContextData>(
  {} as GenerateContextData
);

export { GenerateContext };
