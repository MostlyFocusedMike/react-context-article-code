import { createContext, Dispatch, SetStateAction } from 'react';

export type ExampleContextType = {
  example: string;
  setExample: Dispatch<SetStateAction<string>>;
}

const exampleContext = createContext<ExampleContextType>({} as ExampleContextType);

export default exampleContext;
