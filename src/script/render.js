import { requestPessons, requestVillages } from "./request.js"

// create-clans
const createOptionClans = async () => {

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
createOptionClans()
// create-clans

// create-villagens
const createOptionVillagens = async () => {

    const villagens = await requestVillages()

    const select = document.querySelector(".villages")

    for (let i = 0; i < villagens.length; i++) {
        const villagen = villagens[i];
        
        const option = document.createElement("option")
        option.innerHTML = villagen.name
        option.value = villagen.id

       select.appendChild(option)
    }
   return villagens
}

createOptionVillagens()
// create-villagens