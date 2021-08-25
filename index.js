import { PersonRepository } from "./Repository/PersonRepository.js";
import { Person } from "./Models/Person.js";
import { User } from "./Models/User.js";
import { TypeUser } from "./Models/TypeUser.js";

let repo = new PersonRepository();
let person = new Person();
let user = new User();
let typeUser = new TypeUser();

person.Id = 3796;
person.FirstName = "Felps Da Massa";
person.LastName = "E Da Quebrada";
person.BirthDate = "2021-08-25T12:37:32.24";
person.Document = "51522";
// person.User.Id = 40;
person.User.Email = "felps.motoqueiroDaSeta@hotmail.com";
person.User.Password = "SetaOTempoTodo"; 
// person.User.TypeUser.Id = 65;
person.User.TypeUser.Name = "Drogadasso";
person.User.TypeUser.Description = "Derivadas Ervas";


// user.Email = "felps.motoqueiroDaSeta@hotmail.com";
// user.Password = "SetaOTempoTodo";

// typeUser.Id = 2;
// typeUser.Name = "Drogadasso";
// typeUser.Description = "Derivadas Ervas";

// user.TypeUser = typeUser;
// person.User = user;

// repo.create(person);
// repo.read();
repo.update(person);
repo.read_by_id(3796);
// repo.delete(3795);