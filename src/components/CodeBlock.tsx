"use client";

import hljs from "highlight.js";
import { Content } from "@/interfaces/RichText";
import { useEffect } from "react";
import { CodeLanguages } from "@/constants/languages";

export default function CodeBlock(element: Content, index: number) {
  const language: keyof typeof CodeLanguages = element.attrs
    .language as keyof typeof CodeLanguages;
  const code = element.content[0].text;

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
