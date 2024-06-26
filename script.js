const englishContent = {
  title1: "Gergeti Trinity Church",
  content1:
    " Gergeti Trinity Church, also known as Tsminda Sameba, is situated in the Kazbegi Municipality of the Mtskheta-Mtianeti region in Georgia. It is one of the most iconic symbols of Georgia's Christian heritage and architectural prowess. The church is perched dramatically on a hilltop with the towering Mount Kazbek as its backdrop, offering breathtaking panoramic views of the surrounding landscapes. If you visit Gergeti Sameba, don't forget that it is first of all a working monastery and then a tourist place. So respect the rules of the monastery",
};

const georgianContent = {
  title: "გერგეთის სამება",
  content:
    "გერგეთის სამება XIV საუკუნის პირველი ნახევრის გუმბათოვანი ტაძარია, რომელიც მცხეთა-მთიანეთის მხარეში მდებარეობს. გალავნით შემოზღუდულ კომპლექსში შედის სამების გუმბათოვანი ტაძარი სამრეკო და საბჭეო სადაც ხევის უხუცესები მნიშვნელოვანი საკითხების გადასაწყვეტად იკრიბებოდნენ. გალავნით შემოზღუდული ტაძარი ორსართულიანია. მეორე სართული, რომელიც უცხო თვალისთვის შეუმჩნეველია, სამალავი იყო. თუ გერგეტის სამებას ესტუმრებით არ დაგავიწყდეთ, რომ ის პირველ რიგში მოქმედი მონასტერია და შემდეგ ტურისტული ადგილი. ასე რომ პატივი ეცით მონასტირს წესებს.",
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

  (contentElement.style.fontFamily = "Noto Sans Georgian"), sans - serif;
  contentElement.style.fontSize = "14px";
  contentElement.style.width = "200px";
  contentElement.style.color = "#000";
  contentElement.style.fontWeight = "400";
  titleElement.style.marginBottom = "30px";
  titleElement.style.fontSize = "33px";
  titleElement.style.color = "#000";
  titleElement.style.fontWeight = "400";
  (titleElement.style.fontFamily = "Noto Serif Georgian"), serif;
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
