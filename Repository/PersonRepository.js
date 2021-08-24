import axios from "axios"

export class PersonRepository{
    api_url_base = "http://192.168.0.141/api/";
    api;

    constructor() {
        this.api = axios.create({baseUrl: this.api_url_base})
    }

    create(model) {
        this.api.post("Person", model).then(response => console.log(response.status));
    }

    // read() {
    //     this.api.get("Person").then(response => {
    //         lista = response.data
    //         lista.forEach(something => {
    //             console.log(something)
    //         });
    //     })
    // }

    // read_by_id(id) {
    //     this.api.get(`Person/${id}`).then(response => {
    //         console.log(response);
    //     })
    // }

    // update(model){
    //     this.api.put("Person", model).then(response => console.log(response.status));
    // }

    // delete(id){
    //     this.api.delete("Person",id).then(response => console.log(response.status));
    //= }
}