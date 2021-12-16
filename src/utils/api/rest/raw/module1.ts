import { testRestApiUrl } from "../../endpoint";
import { getApiCall } from "../apiRequest";
// import { getAPI } from "../general";

export const fetchPokemon = async () => {
  const { data } = await getApiCall(
    `${testRestApiUrl}pokemon`,
    //just for demo purposes once everything's setup will use getAPI function commented below
    {
      limit: 10,
      offset: 0,
    }
  );
  //   const { data }: any =  await getAPI("pokemon", { limit: 10, offset: 0 });
  return data;
};
