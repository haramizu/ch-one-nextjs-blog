import type { Meta, StoryObj } from "@storybook/react";
import TagCard from "@/components/TagCard";
import { Category } from "@/interfaces/Category";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Card/Category",
  component: TagCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    categoryName: { control: "text", description: "Enter name of Category" },
    description: {
      control: "text",
      description: "Enter description of Category",
    },
    slug: { contol: "text", description: "Input slug for category page" },
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
  },
} satisfies Meta<Category>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    description:
      "Unleash the Power of Headless CMS with Sitecore Content Hub ONE",
    slug: "content-hub-one",
    categoryName: "Content Hub ONE",
    hero: {
      total: 1,
      results: [
        {
          description: "",
          fileHeight: 1640,
          fileId: "8fa2a14994db453eaf8a176228590a5d",
          fileName: "8fa2a14994db453eaf8a176228590a5d",
          fileSize: 552493,
          fileType: "image/png",
          fileUrl:
            "https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/f36ae82c-5f19-40c5-4086-08daadeee1b8/8fa2a14994db453eaf8a176228590a5d",
          fileWidth: 2982,
          id: "KVQ7SwHONEu9CnRzF09XgQ",
          name: "management-ui-01.png",
        },
      ],
    },
  },
};

export const Secondary: Story = {
  args: {
    description: "Rapidly build modern websites without ever leaving your HTML",
    slug: "tailwindcss",
    categoryName: "Tailwind CSS",
    hero: {
      total: 1,
      results: [
        {
          description: "",
          fileHeight: 1602,
          fileId: "c1f20524107043a8a68a5eae2e8b2e70",
          fileName: "c1f20524107043a8a68a5eae2e8b2e70",
          fileSize: 758853,
          fileType: "image/png",
          fileUrl:
            "https://mms-delivery.sitecorecloud.io/api/media/v2/delivery/f36ae82c-5f19-40c5-4086-08daadeee1b8/c1f20524107043a8a68a5eae2e8b2e70",
          fileWidth: 2886,
          id: "he5sM6CTLUeWaxsjPiu92Q",
          name: "category_tailwind.png",
        },
      ],
    },
  },
};
