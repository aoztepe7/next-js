import contents from "../../../data/contents/contents.json"

// export function GetContents() {
//     const data = contents;

//     return JSON.stringify(data);
// }

export async function GET(request) {
    const contentList = contents;
    return new Response(JSON.stringify(contentList));
}