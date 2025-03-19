let users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
];

let usersWithFullName = [];  

for (let i = 0; i < users.length; i++) {
    let newUser = { 
        fullName: users[i].name + " " + users[i].surname, 
        id: users[i].id 
    };
    usersWithFullName.push(newUser);  
}
console.log(usersWithFullName);
