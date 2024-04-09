import { CHONE_INSTANCE, CHONE_ORGANIZATION } from "@/constants/build";
import { Blog } from "@/interfaces/Blog";
import { vercelStegaEncode } from "@vercel/stega";
import { draftMode } from "next/headers";

export const showTitle = (post: Partial<Blog>) => {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    if (post.id && post.title) {
      return (
        post.title +
        vercelStegaEncode({
          origin: "Content.Hub.ONE",
          href:
            CHONE_INSTANCE + post.id + "?organization=" + CHONE_ORGANIZATION,
        })
      );
    } else {
      return undefined;
    }
  }
  return post.title;
};
