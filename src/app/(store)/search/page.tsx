export default async function Search() {
    await new Promise(resolve => setTimeout(resolve, 1000))

    return (
        <h1>Search!</h1>
    )
}