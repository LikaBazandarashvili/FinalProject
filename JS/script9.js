const englishContent = {
    title1: "Gelati Monastery",
    content1:
      "Gelati -  is a medieval monastic complex near Kutaisi in the Imereti region of western Georgia. it was founded in 1106 by King David IV of Georgia as a monastic and educational center. The monastery is an exemplar of the Georgian Golden Age and a gold aesthetic is employed in the paintings and buildings. It was built to celebrate the Orthodox Christian faith in Georgia. The monastery was inscribed as a UNESCO World Heritage Site in 1994 because of its outstanding architecture and its importance as an educational and scientific center in medieval Georgia.",
  };
  
  const georgianContent = {
    title: "გელათის მონასტერი",
    content:
      "გელათის მონასტერი — ქართული ხუროთმოძღვრული ანსამბლი, შუა საუკუნეების საქართველოს კულტურის უმნიშვნელოვანესი ცენტრი, იუნესკოს მსოფლიო კულტურული მემკვიდრეობის და საქართველოს ეროვნული მნიშვნელობის კულტურის ძეგლი. აგებულია ქუთაისის ჩრდილო-აღმოსავლეთით 11 კმ-ზე, მდინარე წყალწითელის ხეობაში. დაარსებულია 1106 წელს დავით აღმაშენებლის თაოსნობით. შემოზღუდულია გალავნით. ანსამბლში შედის სხვადასხვა დროინდელი (ძირითადად XII-XIII სს.) შენობები. სახელწოდება - გელათი - შესაძლოა მომდინარეობდეს იერუსალიმის ერთ-ერთი კარიბჭის „გენნათის“ სახელიდან.",
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

    contentElement.style.marginBottom = "40px"
    contentElement.style.marginTop = "0px"
  
  
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