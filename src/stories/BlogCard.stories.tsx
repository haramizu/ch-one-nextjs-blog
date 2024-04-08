import type { Meta, StoryObj } from "@storybook/react";
import BlogCard from "@/components/BlogCard";
import { Blog } from "@/interfaces/Blog";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Card/Blog",
  component: BlogCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    title: {
      control: "text",
      description: "Enter the title of your blog",
    },
    description: {
      control: "text",
      description: "Enter description of your blog",
    },
    publishDate: { control: "date", description: "Select published date" }, // Published Date
    slug: { contol: "text", description: "Input slug for blog URL" },
    hero: {
      control: {
        type: "object",
        // Here you define controls for the properties of the hero object
        // In this case, we only have fileUrl
        results: {
          fileUrl: { control: "text" },
        },
      },
    },
    tag: {
      control: {
        type: "object",
        // Here you define controls for the properties of the hero object
        // In this case, we only have fileUrl
        results: {
          categoryName: { control: "text" },
          slug: { control: "text" },
        },
      },
    },
  },
} satisfies Meta<Blog>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    description:
      "現在利用しているブログカードにおいて、日付は値をそのまま表示しており、またタグに関しては取得したデータではなく固定で現在はテンポラリで実装していました。この２つに関して、変更していきます。",
    publishDate: "2024-04-25T15:00:00.000Z",
    slug: "update-blog-card-date-and-tags",
    title: "ブログカードの日付とタグの調整",
    hero: {
      total: 1,
      results: [
        {
          description: "",
          fileHeight: 978,
          fileId: "e10575ef376248438b8edf04a2f4d37e",
          fileName: "",
          fileSize: 638399,
          fileType: "image/png",
          fileUrl:
            "https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/f36ae82c-5f19-40c5-4086-08daadeee1b8/e10575ef376248438b8edf04a2f4d37e",
          fileWidth: 2560,
          id: "ISeyRhbyDk6EzGuCDrubBQ",
          name: "update-blog-card-date-and-tags-03.png",
        },
      ],
    },
    tag: {
      total: 1,
      results: [
        {
          categoryName: "Next.js",
          id: "7NQVbF9gskiIHFSgtac2sw",
          name: "Next.js",
          slug: "nextjs",
          description: "",
          hero: {
            total: 0,
            results: [],
          },
        },
      ],
    },
  },
};

export const Secondary: Story = {
  args: {
    description:
      "これまで Blog のコンポーネントなどを作成してきました。今回は Storybook を追加して、データを取得した後の表示テストができるように Storybook を追加します。",
    publishDate: "2024-05-16T01:00:00.000Z",
    slug: "add-storybook",
    title: "コンポーネントを Storybook で管理する",
    hero: {
      total: 0,
      results: [],
    },
    tag: {
      total: 2,
      results: [
        {
          categoryName: "Next.js",
          id: "7NQVbF9gskiIHFSgtac2sw",
          name: "Next.js",
          slug: "nextjs",
          description: "",
          hero: {
            total: 0,
            results: [],
          },
        },
        {
          categoryName: "Tailwind CSS",
          id: "1vV3mQIXYkW9ygEJo6mAhA",
          name: "Tailwind CSS",
          slug: "tailwindcss",
          description: "",
          hero: {
            total: 0,
            results: [],
          },
        },
      ],
    },
  },
};
