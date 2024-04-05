import { MediaFromIDQuery, MediaResponse } from "@/interfaces/Media";
import { fetchGraphQL } from "@/utils";

export async function getMediaFromID(mediaId: string) {
  const result: MediaResponse = (await fetchGraphQL(
    MediaFromIDQuery(mediaId)
  )) as MediaResponse;

  return result;
}
