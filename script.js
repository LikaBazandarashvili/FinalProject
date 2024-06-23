// English content
const englishContent = {
  title: "Gergeti Trinity Church",
  content:
    " Gergeti Trinity Church, also known as Tsminda Sameba, is situated in the Kazbegi Municipality of the Mtskheta-Mtianeti region in Georgia. It is one of the most iconic symbols of Georgia's Christian heritage and architectural prowess. The church is perched dramatically on a hilltop with the towering Mount Kazbek as its backdrop, offering breathtaking panoramic views of the surrounding landscapes. Pilgrims and visitors often hike up to the church from the village of Gergeti, a journey that rewards them with not only spiritual fulfillment but also stunning natural beauty.",
};

// Georgian translations
const georgianContent = {
  title: "გერგეთის სამების ეკლესია",
  content:
    "გერგეთის სამება XIV საუკუნის პირველი ნახევრის გუმბათოვანი ტაძარია, რომელიც მცხეთა-მთიანეთის მხარეში მდებარეობს. გალავნით შემოზღუდულ კომპლექსში შედის სამების გუმბათოვანი ტაძარი სამრეკო და საბჭეო სადაც ხევის უხუცესები მნიშვნელოვანი საკითხების გადასაწყვეტად იკრიბებოდნენ. გალავნით შემოზღუდული ტაძარი ორსართულიანია. მეორე სართული, რომელიც უცხო თვალისთვის შეუმჩნეველია, სამალავი იყო. შუა საუკუნეების სახიფათო წლებში ქართველები მტრისგან სწორედ გერგეთის ტაძარში იცავდნენ წმინდა ნინოს ჯვარსა და სამეფო საგანძურს.",
};

const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");
const translateToGeorgianButton = document.getElementById("translateToGeorgian"); 
const translateToEnglishButton = document.getElementById("translateToEnglish");

// Initial content in English
titleElement.textContent = englishContent.title;
contentElement.textContent = englishContent.content;

// Event listeners
translateToGeorgianButton.addEventListener("click", () => {
  titleElement.textContent = georgianContent.title;
  contentElement.textContent = georgianContent.content;

  // titleElement.style.fontFamily = "Noto Sans Georgian", sans-serif;
  titleElement.style.marginBottom = "50px";
  titleElement.style.fontSize = "35px";
  titleElement.style.color = "#000" ;
  titleElement.style.fontWeight = "400";
  titleElement.style.fontFamily ="Noto Serif Georgian", serif;
  contentElement.style.fontFamily = "Noto Sans Georgian", sans-serif;
  contentElement.style.fontSize = "16px"; 
  contentElement.style.width = "200px";
  contentElement.style.color = "#000" ;
  contentElement.style.fontWeight = "400";
});

translateToEnglishButton.addEventListener("click", () => {
  titleElement.textContent = englishContent.title;
  contentElement.textContent = englishContent.content;

  titleElement.removeAttribute("style");
  contentElement.removeAttribute("style");
});



const heartIcon = document.getElementById('heartIcon');

heartIcon.addEventListener('click', function() {
 
  heartIcon.classList.toggle('red');
 
  heartIcon.classList.toggle('fas');
});
