import { getMediaFromID } from "@/utils/getMedia";
import Image from "next/image";

interface CHOMediaProps {
  mediaId: string;
  index: number;
}

export default async function CHOMedia(porps: CHOMediaProps) {
  const media = await getMediaFromID(porps.mediaId);

  return (
    <div className="flex justify-center my-4" key={porps.index}>
      <div className="w-4/5 shadow-2xl border border-black">
        <Image
          src={
            media.data.media.fileUrl ||
            "https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e"
          }
          height={media.data.media.fileHeight}
          width={media.data.media.fileHeight}
          alt="Image"
        />
      </div>
    </div>
  );
}
