import { applicationConfiguration } from '../../applicationConfiguration/applicationConfiguration';

export interface SearchParameters {
    queryParameters: string;

}

export const executeSearch = async (parameters : SearchParameters): Promise<void> => {
   const {  } = applicationConfiguration.search;


};
