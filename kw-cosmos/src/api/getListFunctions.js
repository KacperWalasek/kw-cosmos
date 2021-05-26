import { baseUrl } from "./constants";

export function getList(linkData){
    return fetch(baseUrl + linkData.url, {method: 'GET'})
        .then(response => response.json())
        .then(result => result.map(linkData.getArrayFromResult))
        .catch(err=>console.log(err));
}
