import { Person, render } from "../js/personalProfile.js"

let people = [
    new Person("Bob", "../img's/bob-ross.jpg"),
    new Person("Frida", "../img's/frida-kahlo.jpg"),
    new Person("Dali", "../img's/dali.jpg")
];

window.onload = () => {
    renderList(people);
};

function renderList(people) {
    let html = "";
    html += `<ul>`;
    for (let person of people) {
        html += "<li>";
        html += render(person);
        html += "</li>";
    }
    html += "</ul>";

    document.getElementById("list").innerHTML = html;
}