import { getMediaFromID } from "@/utils/getMedia";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const mediaId = params.id;
  const media = await getMediaFromID(mediaId);
  const mediaUrl =
    media.data.media.fileUrl ||
    "https://sitecorecontenthub.stylelabs.cloud/api/public/content/91c3d57209b042ff9aacfee56125ef0e";

  const imageData = await fetch(mediaUrl);
  const blob = await imageData.blob();

  return new NextResponse(blob, { headers: { "Content-Type": "image/png" } });
}
