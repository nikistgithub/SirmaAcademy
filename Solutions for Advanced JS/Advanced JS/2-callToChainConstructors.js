function Person(name) {
    this.name = name;
    Employee.call(name, job);
}

function Employee(name, job) {
    this.name = name;
    this.job = job;
}

const emp = new Employee('Alice', 'Engineer');
console.log(emp);