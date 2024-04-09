import { CHONE_INSTANCE, CHONE_ORGANIZATION } from "@/constants/build";
import { Category } from "@/interfaces/Category";
import { vercelStegaEncode } from "@vercel/stega";
import { draftMode } from "next/headers";

export const showTag = (tag: Partial<Category>) => {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    if (tag.id && tag.categoryName) {
      return (
        tag.categoryName +
        vercelStegaEncode({
          origin: "Content.Hub.ONE",
          href: CHONE_INSTANCE + tag.id + "?organization=" + CHONE_ORGANIZATION,
        })
      );
    } else {
      return undefined;
    }
  }
  return tag.categoryName;
};
