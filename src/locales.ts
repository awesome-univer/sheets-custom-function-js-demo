import { LocaleType } from "@univerjs/core";
import { zhCN, enUS } from 'univer:locales'
import { functionEnUS, functionZhCN } from "./custom-function";

export const locales = {
  [LocaleType.EN_US]: {
    ...enUS,
    ...functionEnUS,
  },
  [LocaleType.ZH_CN]: {
    ...zhCN,
    ...functionZhCN,
  },
};
