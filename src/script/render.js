import { requestPessons } from "./request.js"

export const createOption = async () => {

    const clans = await requestPessons()

    const select = document.querySelector(".clans")

    for (let i = 0; i < clans.length; i++) {
        const clan = clans[i];
        
        const option = document.createElement("option")
        option.innerHTML = clan.name
        option.value = clan.id

       select.appendChild(option)
    }
   return clans
}
createOption()