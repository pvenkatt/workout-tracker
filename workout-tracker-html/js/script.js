const today = new Date().toISOString().split("T")[0];
const dateInput = document.getElementById("date");
const otherFields = document.getElementById("other-fields");

const muscleGroupSelect = document.getElementById("muscle-group");
const muscleSelect = document.getElementById("muscle");

dateInput.value=today;
dateInput.setAttribute("max", today);

//I will get the workout type and only enable strength fields if strength is selected
const workoutType = document.getElementById("workout-type");
const strengthFields = document.getElementById("strength-fields");
toggleStrengthFields()
workoutType.addEventListener("change",toggleStrengthFields);

function toggleStrengthFields(){
    if(workoutType.value==="strength"){
        strengthFields.style.display="contents";
        otherFields.style.display="none";
    } else {
        strengthFields.style.display="none";
        otherFields.style.display="contents";
    }   
}