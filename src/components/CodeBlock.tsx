"use client";

import hljs from "highlight.js";
import { Content } from "@/interfaces/RichText";
import { useEffect } from "react";
import { CodeLanguages } from "@/constants/languages";

interface CodeBlockProps {
  element: Content;
  index: number;
}

export default function CodeBlock(props: CodeBlockProps) {
  const language: keyof typeof CodeLanguages = props.element.attrs
    .language as keyof typeof CodeLanguages;
  const code = props.element.content[0].text;

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <pre className="rounded-lg p-1 bg-gray-900 dark:bg-gray-700 my-3">
        <p className="text-white"> {CodeLanguages[language] || language}</p>

        <code className={language}>{code}</code>
      </pre>
    </>
  );
}
