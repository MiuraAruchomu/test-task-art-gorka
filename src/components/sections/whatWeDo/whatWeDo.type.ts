export type TDropdownLeaf = string;

export type TDropdownBranch = {
  [key: string]: (TDropdownLeaf | TDropdownBranch)[];
};

export type TDropdownItem = TDropdownLeaf | TDropdownBranch;

export type TWhatWeDoDropdownConfig = {
  [category: string]: TDropdownItem[];
};
