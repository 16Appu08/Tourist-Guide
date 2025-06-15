const cityList = {
  delhi: "Delhi",
  mumbai: "Mumbai",
  chennai: "Chennai"
};

const select = document.getElementById("citySelect");

// Clear all options except the default
while (select.options.length > 1) {
  select.remove(1);
}

// Populate dropdown
for (let key in cityList) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = cityList[key];
  select.appendChild(option);
}

// ✅ Force reset to "--Select City--" on page load
select.selectedIndex = 0;

// Handle selection change
select.addEventListener("change", () => {
  const selectedCity = select.value;
  if (selectedCity) {
    window.location.href = `city.html?city=${selectedCity}`;
  }
});
