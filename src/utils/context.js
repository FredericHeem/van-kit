import van from "vanjs-core";
import { createTheme } from "./theme";

export function createContext(extra = {}) {
  return {
    van,
    tr: (text) => text,
    theme: createTheme({}),
    ...extra,
  };
}
