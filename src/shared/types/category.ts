export interface Subcategory {
  id: string;
  name: string;
  url: string;
  slug: string;
}

export interface Subtags {
  id: string;
  name: string;
  url: string;
  slug: string;
}

export interface Group {
  id: string;
  name: string;
  url: string;
  slug: string;
  subcategories: Subcategory[];
  seeAllUrl: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  subtags: Subtags[];
}

export interface Category {
  id: string;
  name: string;
  icon_cnd: string;
  url: string;
  slug: string;
  groups: Group[];
  tags: Tag[];
}
