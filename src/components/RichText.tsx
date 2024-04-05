import { Content, Marks, RichTextResponse } from "@/interfaces/RichText";
import Link from "next/link";
import { Fragment } from "react";
import CodeBlock from "@/components/CodeBlock";
import CHOMedia from "@/components/CHOMedia";

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
          return <CodeBlock element={element} index={index} />;
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
  const level = element.attrs.level;
  const formattedText = textFunction(element.content);
  const headingElements: JSX.Element[] = [];
  const sectionId = sectionFunction(element.content);

  switch (level) {
    case 1:
      headingElements.push(
        <h1 key={index} className="text-2xl mt-4 font-bold" id={sectionId}>
          {formattedText}
        </h1>
      );
      break;
    case 2:
      headingElements.push(
        <h2 key={index} className="text-xl mt-2 font-bold" id={sectionId}>
          {formattedText}
        </h2>
      );
      break;
    case 3:
      headingElements.push(
        <h3 key={index} className="text-lg mt-2 font-bold" id={sectionId}>
          {formattedText}
        </h3>
      );
      break;
    case 4:
      headingElements.push(
        <h4 key={index} className="text-base mt-2" id={sectionId}>
          {formattedText}
        </h4>
      );
      break;
    case 5:
      headingElements.push(
        <h4 key={index} className="text-sm mt-2" id={sectionId}>
          {formattedText}
        </h4>
      );
      break;
    case 6:
      headingElements.push(
        <h4 key={index} className="text-sm mt-2" id={sectionId}>
          {formattedText}
        </h4>
      );
      break;
    default:
      headingElements.push(
        <h2 key={index} className="text-2xl mt-4 font-bold" id={sectionId}>
          {formattedText}
        </h2>
      );
      break;
  }
  return headingElements;
}

function sectionFunction(element: Content[]) {
  let sectionId;
  if (element !== undefined) {
    element.forEach((content) => {
      sectionId = content.text.replace(/\s+/g, "-");
    });
  }
  return sectionId;
}

function showParagraph(element: Content, index: number) {
  const paragraphText = textFunction(element.content);
  if (element.content !== undefined) {
    const contentText = element.content[0].text;
    if (contentText.startsWith("https://www.youtube.com/")) {
      return youtubeFunction(contentText, index);
    } else if (contentText.startsWith("CHOMEDIA=")) {
      const mediaId = contentText.replace("CHOMEDIA=", "");

      return <CHOMedia mediaId={mediaId} index={index} />;
    }
  }

  return (
    <Fragment key={index}>
      <p className="my-2">{paragraphText}</p>
    </Fragment>
  );
}

function textFunction(element: Content[]) {
  const textElements: JSX.Element[] = [];
  if (element !== undefined) {
    element.forEach((content, index) => {
      if (content.marks !== undefined) {
        textElements.push(
          <Fragment key={index}>
            {marksFunction(content.marks, content.text)}
          </Fragment>
        );
      } else {
        textElements.push(<Fragment key={index}>{content.text}</Fragment>);
      }
    });
  }
  return textElements;
}

function marksFunction(marks: Marks[], text: string) {
  let marksElements: JSX.Element | undefined;
  marks.forEach((mark, markIndex) => {
    if (markIndex === 0) {
      switch (mark.type) {
        case "link":
          marksElements = (
            <Link
              key="markIndex"
              href={mark.attrs.href}
              target={mark.attrs.target}
            >
              {text}
            </Link>
          );
          break;
        case "bold":
          marksElements = <strong key="markIndex">{text}</strong>;
          break;
        case "italic":
          marksElements = <em key="markIndex">{text}</em>;
          break;
        case "underline":
          marksElements = <u key="markIndex">{text}</u>;
          break;
        case "strike":
          marksElements = <s key="markIndex">{text}</s>;
          break;
        case "code":
          marksElements = <code key="markIndex">{text}</code>;
          break;
        default:
          marksElements = <>{text}</>;
      }
    } else {
      switch (mark.type) {
        case "link":
          marksElements = (
            <Link
              key="markIndex"
              href={mark.attrs.href}
              target={mark.attrs.target}
            >
              {marksElements}
            </Link>
          );
          break;
        case "bold":
          marksElements = <strong key="markIndex">{marksElements}</strong>;
          break;
        case "italic":
          marksElements = <em key="markIndex">{marksElements}</em>;
          break;
        case "underline":
          marksElements = <u key="markIndex">{marksElements}</u>;
          break;
        case "strike":
          marksElements = <s key="markIndex">{marksElements}</s>;
          break;
        case "code":
          marksElements = <code key="markIndex">{marksElements}</code>;
          break;
        default:
          marksElements = <>{marksElements}</>;
      }
    }
  });

  return marksElements;
}

function showBlockquote(element: Content, index: number) {
  const blockquoteElements = element.content.map((element) => {
    switch (element.type) {
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
        return <CodeBlock element={element} index={index} />;
      case "horizontalRule":
        return showHorizontalRule();
      default:
        return;
    }
  });

  return (
    <figure className="my-5 border-l border-indigo-600 pl-9">
      <blockquote key={index}>{blockquoteElements}</blockquote>
    </figure>
  );
}

function showTable(element: Content, index: number) {
  const tableElements: JSX.Element[] = [];

  if (element !== undefined) {
    element.content.forEach((content, key) => {
      tableElements.push(<tr key={key}>{showTableRaw(content)}</tr>);
    });
  }

  return (
    <div key={index}>
      <table className="my-4 table-auto border border-gray-300">
        <tbody>{tableElements}</tbody>
      </table>
    </div>
  );
}

function showTableRaw(element: Content) {
  const tableRawElements: JSX.Element[] = [];

  if (element !== undefined) {
    element.content.forEach((content, key) => {
      if (content.type === "tableHeader") {
        tableRawElements.push(
          <th key={key} className="bg-gray-200 border border-gray-300 p-2">
            {showTableCell(content)}
          </th>
        );
      } else {
        tableRawElements.push(
          <td key={key} className="p-2 border border-gray-300">
            {showTableCell(content)}
          </td>
        );
      }
    });
  }

  return tableRawElements;
}

function showTableCell(element: Content) {
  const tableCellElements: JSX.Element[] = [];
  if (element !== undefined) {
    element.content.forEach((content, key) => {
      switch (content.type) {
        case "paragraph":
          tableCellElements.push(showParagraph(content, key));
          break;
        case "blockquote":
          tableCellElements.push(showBlockquote(content, key));
          break;
        case "bulletList":
          tableCellElements.push(showBulletList(content, key));
          break;
        case "orderedList":
          tableCellElements.push(showOrderdList(content, key));
          break;
        case "horizontalRule":
          tableCellElements.push(showHorizontalRule());
          break;
        default:
          break;
      }
    });
  }

  return tableCellElements;
}

function showBulletList(element: Content, index: number) {
  const listItems = itemListFunction(element.content);

  return (
    <ul key={index} className="list-disc list-inside ml-4">
      {listItems}
    </ul>
  );
}

function showOrderdList(element: Content, index: number) {
  const listItems = itemListFunction(element.content);

  return (
    <ol key={index} className="list-decimal list-inside ml-4">
      {listItems}
    </ol>
  );
}

function itemListFunction(element: Content[]) {
  const textElements: JSX.Element[] = [];

  if (element !== undefined) {
    element.forEach((item, key) => {
      item.content.forEach((content, key) => {
        if (content.type === "bulletList") {
          textElements.push(showBulletList(content, key));
        } else if (content.type === "orderedList") {
          textElements.push(showOrderdList(content, key));
        } else {
          textElements.push(<li key={key}>{textFunction(content.content)}</li>);
        }
      });
    });
  }
  return textElements;
}

function showHorizontalRule() {
  return <hr />;
}

function youtubeFunction(youtubeLink: string, index: number) {
  const videoId = youtubeLink.replace("https://www.youtube.com/watch?v=", "");

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
