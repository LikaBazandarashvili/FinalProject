const englishContent = {
  title1: "Alaverdi Monastery",
  content1:
    "Alaverdi -  Monastery is located in the Kakheti region of Akhmeta municipality, on Alazani valley, near the village of Alaverdi The temple is one of the largest church buildings in Georgia. Its height including dome is above 50 meters. The complex includes buildings: Alaverdi St. George Cathedral, defensive wall, chapel, Peikar-Khan's palace, wine cellar and bath. Alaverdi Monastery was founded by Joseph Alaverdeli, one of the Assyrian fathers in the middle of the VI century. At the beginning of the XI century, Kvirike the King of Kakheti built a cathedral. ",
};

const georgianContent = {
  title: "ალავერდის მონასტერი",
  content:
    "ალავერდი - საკათედრო ტაძარი და მონასტერი, მდებარეობს კახეთის მხარეში ახმეტის მუნიციპალიტეტში, ალაზნის ველზე სოფელ ალავერდთან. ტაძარი ერთ-ერთი უდიდესი საეკლესიო ნაგებობაა საქართველოში. მისი სიმაღლე გუმბათიანად 50 მეტრს აღემატება. კომპლექსში შემავალი ნაგებობებია: ალავერდის წმ. გიორგის საკათედრო ტაძარი, გალავანი, სამრეკლო, პალატი, ფეიქარ-ხანის სასახლე, მარანი და აბანო. XI საუკუნის დასაწყისში კვირიკე კახთა მეფემ ალავერდის წმ. გიორგის პატარა ეკლესიის ადგილას ააგო საკათედრო ტაძარი, რომელიც უმთავრესად ალავერდის სახელწოდებითაა ცნობილი. ",
};

const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");
const translateToGeorgianButton = document.getElementById(
  "translateToGeorgian"
);
const translateToEnglishButton = document.getElementById("translateToEnglish");

titleElement.textContent = englishContent.title1;
contentElement.textContent = englishContent.content1;

translateToGeorgianButton.addEventListener("click", () => {
  titleElement.textContent = georgianContent.title;
  contentElement.textContent = georgianContent.content;

  contentElement.style.marginBottom = "40px";
  contentElement.style.marginTop = "0px";
});

translateToEnglishButton.addEventListener("click", () => {
  titleElement.textContent = englishContent.title1;
  contentElement.textContent = englishContent.content1;

  titleElement.removeAttribute("style");
  contentElement.removeAttribute("style");
});

const heartIcon = document.getElementById("heartIcon");

heartIcon.addEventListener("click", function () {
  heartIcon.classList.toggle("red");

  heartIcon.classList.toggle("fas");
});
