import axios from "axios"

export class BaseRepository {
    #api_url_base = "http://192.168.0.141/api/";
    #api;
    endpoint;

    constructor(endpoint) {
        this.#api = axios.create({ baseURL: this.#api_url_base });
        this.endpoint = endpoint;
    }
    
    create(model) {
        this.#api.post(this.endpoint, model).then(response => console.log(response.status));
        console.log(model);
    }

    read() {
        this.#api.get(this.endpoint).then(response => {
            let lista = response.data
            lista.forEach(something => {
                console.log(something)
            });
        })
    }

    read_by_id(id) {
        this.#api.get(`${this.endpoint}/${id}`).then(response => {
            console.log(response.data);
        })
    }

    update(model){
        this.#api.put(`${this.endpoint}/${model.Id}`, model).then(response => console.log(response.status));
    }

    delete(id){
        this.#api.delete(`${this.endpoint}/${id}`).then(response => console.log(response.status));
    }

}