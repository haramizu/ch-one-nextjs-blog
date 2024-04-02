export interface Media {
  id: string;
  name: string;
  description: string;
  fileId: string;
  fileUrl: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  fileHeight: number;
  fileWidth: number;
}

export interface MediaResponse {
  data: {
    media: Partial<Media>;
  };
}

export const MediaQuery = `
id
name
description
fileId
fileName
fileHeight
fileWidth
fileSize
fileType
fileUrl
`;

export const MediaFromIDQuery = (mediaId: string) => {
  return (
    `
  query Media {
    media(id: "${mediaId}") {
        ` +
    MediaQuery +
    `
    }
  }
  `
  );
};
