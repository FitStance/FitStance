document.getElementById("fitness-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const age = parseInt(this.age.value);
  const gender = this.gender.value;
  const height = parseFloat(this.height.value);
  const weight = parseFloat(this.weight.value);
  const activity = parseFloat(this.activity.value);
  const goal = this.goal.value;

  let bmr = gender === "male"
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const tdee = Math.round(bmr * activity);
  const water = (weight * 0.035).toFixed(2);

  let bmiCategory = "Normal";
  if (bmi < 18.5) bmiCategory = "Underweight";
  else if (bmi >= 25 && bmi < 30) bmiCategory = "Overweight";
  else if (bmi >= 30) bmiCategory = "Obese";

  let adjustedCalories = tdee;
  if (goal === "gain") adjustedCalories += 300;
  if (goal === "lose") adjustedCalories -= 300;

  const protein = Math.round(weight * 2);
  const fats = Math.round(weight * 1);
  const proteinCal = protein * 4;
  const fatCal = fats * 9;
  const carbCal = adjustedCalories - (proteinCal + fatCal);
  const carbs = Math.round(carbCal / 4);

  document.getElementById("bmr").textContent = Math.round(bmr);
  document.getElementById("bmi").textContent = bmi;
  document.getElementById("bmi-category").textContent = bmiCategory;
  document.getElementById("tdee").textContent = tdee;
  document.getElementById("water").textContent = water;
  document.getElementById("protein").textContent = protein;
  document.getElementById("carbs").textContent = carbs;
  document.getElementById("fats").textContent = fats;
});
