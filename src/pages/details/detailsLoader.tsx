import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/PackageDetails";
interface LoaderArgs {
    params: Params;
}
export interface DetailsLoaderResult {
    details: PackageDetails;
}

export async function detailsLoader({params}: LoaderArgs) {
    const { name } = params;

    if(!name) {
        throw new Error('Name must be provided');
    }
    //await getPackage(name);

    const details = await getPackage(name);
  
    return {
        details,
    };
}