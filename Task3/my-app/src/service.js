import axios from "axios"

axios.defaults.baseURL = "http://172.20.10.4.:8000/api"

export default class Service {

    async getResource(url){
        return axios.get(url)
    }

    async postResource(url,payload){
        return axios.post(url,payload)
    }

    async deleteResource(url){
        return axios.delete(url)
    }

    async createCard(name){
        const payload = {
            name
        }
        return this.postResource('/cards',payload)
    }

    async getCardsList(){
        return this.getResource('/cards')
    }

    async getCurrentCardDetail(id){
        return this.getResource(`/cards/${id}`)
    }

    async createTask(id,taskText){
        const payload = {
            taskText
        }
        return this.postResource(`/cards/${id}/tasks`,payload)
    }

    async getTaskList(id){
        return this.getResource(`/cards/${id}/tasks`)
    }

    async deleteCard(id){
        return this.deleteResource(`/cards/${id}`)
    }

}