var d = new Date();
const banner = document.getElementById("pancakes");
if (d.getDay() == 5) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}