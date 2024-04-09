import { draftMode } from "next/headers";

type GraphQLResponseWithErrors = {
  errors: unknown[];
};

export async function fetchGraphQL(query: string): Promise<unknown> {
  const { isEnabled } = draftMode();

  const Environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  let apiKey = "";
  let endpointUrl = "";

  if (isEnabled || Environment === "Preview") {
    apiKey = process.env.NEXT_PUBLIC_CHONE_PREVIEW_KEY ?? "";
    endpointUrl = process.env.NEXT_PUBLIC_CHONE_PREVIEW_ENDPOINT ?? "";
  } else {
    apiKey = process.env.NEXT_PUBLIC_CHONE_DELIVERY_KEY ?? "";
    endpointUrl = process.env.NEXT_PUBLIC_CHONE_DELIVERY_ENDPOINT ?? "";
  }

  try {
    return await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-GQL-Token": apiKey,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    })
      .then((response: Response) => {
        const jsonResponsePromise = response.json();
        jsonResponsePromise.then((jsonResponse: unknown) => {
          const responseWithErrors = jsonResponse as GraphQLResponseWithErrors;
          if (
            responseWithErrors.errors &&
            responseWithErrors.errors.length > 0
          ) {
            console.error(
              "An error was returned by a GraphQL query. See the associated logged object for details.",
              responseWithErrors
            );
          }
        });
        return jsonResponsePromise;
      })
      .catch((error) => {
        return console.log(error);
      });
  } catch (error) {
    return console.log(error);
  }
}

export async function easyGraphQL(query: string): Promise<unknown> {
  const Environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
  let apiKey = "";
  let endpointUrl = "";

  if (Environment === "Preview") {
    apiKey = process.env.NEXT_PUBLIC_CHONE_PREVIEW_KEY ?? "";
    endpointUrl = process.env.NEXT_PUBLIC_CHONE_PREVIEW_ENDPOINT ?? "";
  } else {
    apiKey = process.env.NEXT_PUBLIC_CHONE_DELIVERY_KEY ?? "";
    endpointUrl = process.env.NEXT_PUBLIC_CHONE_DELIVERY_ENDPOINT ?? "";
  }

  try {
    return await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-GQL-Token": apiKey,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    })
      .then((response: Response) => {
        const jsonResponsePromise = response.json();
        jsonResponsePromise.then((jsonResponse: unknown) => {
          const responseWithErrors = jsonResponse as GraphQLResponseWithErrors;
          if (
            responseWithErrors.errors &&
            responseWithErrors.errors.length > 0
          ) {
            console.error(
              "An error was returned by a GraphQL query. See the associated logged object for details.",
              responseWithErrors
            );
          }
        });
        return jsonResponsePromise;
      })
      .catch((error) => {
        return console.log(error);
      });
  } catch (error) {
    return console.log(error);
  }
}
