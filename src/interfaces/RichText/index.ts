export interface RichTextResponse {
  type: string;
  content: Content[];
}

export interface Content {
  type: string;
  attrs: Attribute;
  content: Content[];
  marks: Marks[];
  text: string;
}

export interface Attribute {
  level: number;
  href: string;
  target: string;
  rel: string;
  colspan: number;
  rowspan: number;
  language: string;
}

export interface Marks {
  type: string;
  attrs: Attribute;
}
