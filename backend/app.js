import {User} from "./index.js"

const user = new User();
user.add_user(1,
    {
        "first_name":"Hello",
        "last_name":"World",
        'address':"23 lane",
        'city': "Dehradun",
        'country':"Algeria",
        'contact_no':9302930293,
        'email':"hello@gmail.com",
        'password':"39k2jjjf"
    }
)
console.log("added user")