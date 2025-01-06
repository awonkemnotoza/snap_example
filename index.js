// Task: Create a pipeline on Snaplogic that does the exact same thing as this code does.

const baseURL = "https://jsonplaceholder.typicode.com/";

// This will be your input data
const userData = {
    name: "Test_name",
    userId: 1
}

async function getALLTodos() {
    const response = await fetch(`${baseURL}/todos`,  {
        method: "GET",
        "Content-Type": "application/json"
    });
    const data = response.json();
    return data;
}

async function getUserTodosById(id) {
    const todos = await getALLTodos();
    return todos.filter((todo) => todo.userId === id);
}

async function main() {
    const todos = await getUserTodosById(userData.userId);

    const completed = todos.filter((todo) => todo.completed === true);
    const incompleted = todos.filter((todo) => todo.completed === false);

    if (incompleted.length > completed.length) {
        console.log(`${userData.name} you are not doing great. Incompleted [${incompleted.length}], completed [${completed.length}]`)
    } else {
        console.log(`${userData.name} you are doing great. Incompleted [${incompleted.length}], completed [${completed.length}]`)
    }
}

main()