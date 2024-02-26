const baseUrl = "https://dattebayo-api.onrender.com"

export const requestPessons = async () => {
    const result = await fetch(`${baseUrl}/clans`, {
        method: "GET",
        headers: {
            "Content-Type": "applocation/json"
        }
    }).then((res) => {
        return res.json()
    })

    return result.clans
}