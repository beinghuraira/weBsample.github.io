//Titler data Type
let Projecttitle = "     Lab Task";
// boolean data Type
let iscompleted = true;
//srting data Type
let name = "Abu Huraira";
//Number data Type
let Year = 2026;

//Array data Type
let CodeTypes = ["HTML","CSS","JAvAScript"];
//Object data Type
let myinfo = {
    name: "Abu Huraira",
    ID: "70148138",
    Course:"Web DEV"
};
document.getElementById("Project").innerHTML="ProJect:   "+ Projecttitle;

document.getElementById("Language Type").innerHTML="Language:    "+ CodeTypes.join(",");

document.getElementById("Student").innerHTML="Name:  "+ myinfo.name

document.getElementById("Status").innerHTML="Status:         "+ iscompleted;

function summary() {
document.getElementById("summary").innerHTML =
    "Project: " + Projecttitle + "<br>" +
    "Languages: " + CodeTypes.join(", ") + "<br>" +
    "Student: " + myinfo.name;
}
// function toggleInfo() {
// let section = document.getElementById("infoSection");section.style.display = (section.style.display === "none") ? "block" : "none";
// }
function resetInfo() {
document.getElementById("Project").innerHTML = "";
document.getElementById("LanguageType").innerHTML = "";
document.getElementById("Student").innerHTML = "";
document.getElementById("Status").innerHTML = "";
document.getElementById("summary").innerHTML = "";
}