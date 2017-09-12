// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (student in students){
    console.log("Name: " + students[student].name + ", Cohort: " + students[student].cohort);
}

// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

var iNum = 1;
console.log("EMPLOYEES");
for (employee in users.employees){
    console.log(iNum + " - " + 
        users.employees[employee].last_name.toUpperCase() + ", " +
        users.employees[employee].first_name.toUpperCase() + " - " +
        (users.employees[employee].first_name.length + users.employees[employee].last_name.length)
    );
    iNum++;
}
var iNum = 1;
console.log("MANAGERS");
for (manager in users.managers){
    console.log(iNum + " - " +
        users.managers[manager].last_name.toUpperCase() + ", " +
        users.managers[manager].first_name.toUpperCase() + " - " +
        (users.managers[manager].first_name.length + users.managers[manager].last_name.length)
    );
    iNum++;
}
