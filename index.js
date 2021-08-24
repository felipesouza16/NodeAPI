import { PersonRepository } from "./Repository/PersonRepository.js";
import { Person } from "./Models/Person.js";
import { User } from "./Models/User.js";
import { TypeUser } from "./Models/TypeUser.js";

let repo = new PersonRepository();
let person = new Person();
let user = new User();
let typeUser = new TypeUser();

person.FirstName = "Felps Da Massa";
person.LastName = "E Da Quebrada";
person.BirthDate = "16/11/2002";
person.Document = "51522";
user.Email = "felps.motoqueiroDaSeta@hotmail.com";
user.Password = "SetaOTempoTodo";
typeUser.Name = "Drogadasso";
typeUser.Description = "Derivadas Ervas";

user.TypeUser = typeUser;
person.User = user;

// person.User.Email = "felps.motoqueiroDaSeta@hotmail.com"
// person.User.Password = "SetaOTempoTodo";
// user.TypeUser.Name = "Drogadasso";
// user.TypeUser.Description = "Derivadas ervas";
// person = user;

repo.create(person);