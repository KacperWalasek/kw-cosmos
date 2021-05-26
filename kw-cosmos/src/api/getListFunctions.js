import { baseUrl } from "./constants";

export function getList(linkData){
    return fetch(baseUrl + linkData.url, {method: 'GET'})
        .then(response => response.json())
        .then(result => result.map((item,i)=>
            // we store index of item to allow sorting in original order
            [...linkData.getArrayFromResult(item), i]
        ))
        .catch(err=>console.log(err));
}
