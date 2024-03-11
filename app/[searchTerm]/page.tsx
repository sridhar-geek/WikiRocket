import getWikipedia from "@/lib/getWikipedia"
import Item from "./components/item"


interface Props {
    params:{
        searchTerm :string
    }
}

 const Dynamic = async ({params:{searchTerm}}: Props) => {
    const wikiData : Promise<SearchResult> = getWikipedia(searchTerm)
    const data = await wikiData
    const results : Result[] | undefined = data?.query?.pages
    return (
        <main className="bg-black mx-auto max-w-lg py-1 min-h-screen">
            { results ? Object.values(results).map(result => {
                return <Item key={result.pageid} result={result} />
            })
                : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`} </h2>
            }
        </main>
    )
}

export default Dynamic