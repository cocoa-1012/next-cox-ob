import {
  createContext,
  useReducer,
  useEffect,
  Reducer,
  ReactChildren,
  FC,
} from "react";

interface WizzardState {
  isForward: boolean;
  activeIndex: number;
  history: number[];
}

export const WizzardContext = createContext({
  isForward: true,
  activeIndex: 0,
  history: [] as number[],
  next() {},
  back() {},
  goto(_: number) {},
});

type WizzardAction =
  | { type: "next" }
  | { type: "back" }
  | { type: "goto"; index: number };

const wizzardReducer: Reducer<WizzardState, WizzardAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "next":
      const activeIndex = state.activeIndex + 1;
      return {
        isForward: true,
        activeIndex,
        history: [...state.history, state.activeIndex],
      };
    case "back":
      const history = state.history.slice();
      if (history.length === 0) {
        return state;
      }
      return {
        isForward: false,
        activeIndex: history.pop() as number,
        history,
      };
    case "goto":
      return {
        isForward: true,
        activeIndex: action.index,
        history: [...state.history, state.activeIndex],
      };
    default:
      return state;
  }
};

export interface WizzardProps {
  children: ReactChildren;
}

const Wizzard: FC<WizzardProps> = ({ children }) => {
  const [state, dispatch] = useReducer(wizzardReducer, {
    activeIndex: 0,
    history: [],
    isForward: true,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.activeIndex]);

  const next = () => {
    dispatch({ type: "next" });
  };

  const back = () => {
    dispatch({ type: "back" });
  };

  const goto = (index: number) => {
    dispatch({ type: "goto", index });
  };

  return (
    <WizzardContext.Provider
      value={{
        goto,
        next,
        back,
        ...state,
      }}
    >
      {children}
    </WizzardContext.Provider>
  );
};

export default Wizzard;
export * from "./WizzardSteps";
