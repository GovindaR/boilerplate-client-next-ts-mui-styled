import { useMutation, useQuery } from "react-query";

import { getApiCall, postApiCall } from "./apiRequest";
import { getAPI, postAPI } from "./general";

export const useQueryGetRequest = ({
  name,
  options,
  endpoint,
  variables,
}: useQueryRequestProps) => {
  return useQuery(
    [name, variables],
    async () => {
      const { data } = await getApiCall(
        endpoint,
        variables
        //just for demo purposes once everything's setup will use getAPI function commented below
      );
      // const { data } =  await getAPI(endpoint, { limit: 10, offset: 0 })
      return data;
    },
    options
  );
};

export const useMutationPostRequest = ({
  options,
  endpoint,
  variables,
}: useMutationRequestProps) => {
  return useMutation(async (v?: any) => {
    const { data } = await postApiCall(endpoint, v || variables);
    // const { data } =  await postAPI(endpoint, { limit: 10, offset: 0 })
    return data;
  }, options);
};

interface useQueryRequestProps {
  name: string;
  options?: any;
  variables?: any;
  endpoint: string;
}

interface useMutationRequestProps {
  options?: any;
  name?: string;
  variables?: any;
  endpoint: string;
}
