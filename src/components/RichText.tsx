import { Content, RichTextResponse } from "@/interfaces/RichText";

type RichTextProps = {
  richText: RichTextResponse | undefined;
};

export default function RichText({ richText }: RichTextProps) {
  if (richText === undefined || richText.type !== "doc") {
    return "Error";
  } else {
    const contentList = richText.content;
    const elements = contentList.map((element, index) => {
      switch (element.type) {
        case "heading":
          return showHeading(element, index);
        case "paragraph":
          return showParagraph(element, index);
        case "blockquote":
          return showBlockquote(element, index);
        case "table":
          return showTable(element, index);
        case "bulletList":
          return showBulletList(element, index);
        case "orderedList":
          return showOrderdList(element, index);
        case "codeBlock":
          return CodeBlock(element, index);
        case "horizontalRule":
          return showHorizontalRule();
        default:
          return;
      }
    });
    return elements;
  }
}

function showHeading(element: Content, index: number) {
  return <div key={index}>showHeading</div>;
}

function showParagraph(element: Content, index: number) {
  return <div key={index}>showParagraph</div>;
}

function showBlockquote(element: Content, index: number) {
  return <div key={index}>showBlockquote</div>;
}

function showTable(element: Content, index: number) {
  return <div key={index}>showTable</div>;
}

function showBulletList(element: Content, index: number) {
  return <div key={index}>showBulletList</div>;
}

function showOrderdList(element: Content, index: number) {
  return <div key={index}>showOrderdList</div>;
}

function CodeBlock(element: Content, index: number) {
  return <div key={index}>CodeBlock</div>;
}

function showHorizontalRule() {
  return <hr />;
}
