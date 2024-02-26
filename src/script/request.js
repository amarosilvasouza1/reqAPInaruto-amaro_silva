const baseUrl = "https://dattebayo-api.onrender.com"

// req-clans
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
// req-clans

// req-villages
export const requestVillages = async () => {
    const result = await fetch(`${baseUrl}/villages`, {
        method: "GET",
        headers: {
            "Content-Type": "applocation/json"
        }
    }).then((res) => {
        return res.json()
    })

    return result.villages
}
// req-villages
