
//opens the modal
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");

}




//do the calculation
function getCalories()  {
    const choose_1 = document.getElementById("choose_1");
    const choose_2 = document.getElementById("choose_2");
    const age = document.getElementById("age");
    const height = document.getElementById("height");
    const weight = document.getElementById("weight");
    const choose_3 = document.getElementById("choose_3");
    const choose_4 = document.getElementById("choose_4");
    const choose_5 = document.getElementById("choose_5");
    const choose_6 = document.getElementById("choose_6");
    const choose_7 = document.getElementById("choose_7");
    const choose_8 = document.getElementById("choose_8");
    const food_consumed = document.getElementById("food_consumed");
    const food_calories =  document.getElementById("food_calories");
    
    


    //replace
    let cal_value = document.getElementById("value");
    let new_cal_value = document.getElementById("value_get_calories");
    let get_food = document.getElementById("get_food");



    if (choose_2.checked == true) {
        let bmr = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) -161;
        
        if (choose_3.checked == true) {
            let amr = bmr * 1.2;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_4.checked == true) {
            let amr = bmr * 1.375;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_5.checked == true) {
            let amr = bmr * 1.465;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_6.checked == true) {
            let amr = bmr * 1.725;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        }  else if (choose_7.checked == true) {
            let amr = bmr * 1.55;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_8.checked == true) {
            let amr = bmr * 1.9;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);
        }


    } else {
        let bmr = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
        
        if (choose_3.checked == true) {
            let amr = bmr * 1.2;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_4.checked == true) {
            let amr = bmr * 1.375;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_5.checked == true) {
            let amr = bmr * 1.465;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_6.checked == true) {
            let amr = bmr * 1.725;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = nMath.round(new_cal);

        } else if (choose_7.checked == true) {
            let amr = bmr * 1.55;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);

        } else if (choose_8.checked == true) {
            let amr = bmr * 1.9;
            let new_cal = amr - food_calories.value;

            cal_value.innerHTML = Math.round(amr);
            get_food.innerHTML = food_consumed.value;
            new_cal_value.innerHTML = Math.round(new_cal);
        }
    }
}