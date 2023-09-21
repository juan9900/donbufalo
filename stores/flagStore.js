import { set } from "react-hook-form";
import { create } from "zustand";

const useFlagStore = create((set) => ({
  key: "VE",
  label: "Venezuela",
  placeholder: "424 123 4567",
  code: "+58",
  regex: /^(4[1246]\d{8})$/,
  setFlag: (flag) =>
    set((state) => ({
      key: flag.key,
      label: flag.label,
      placeholder: flag.placeholder,
      code: flag.code,
      regex: flag.regex,
    })),
}));

export { useFlagStore };
