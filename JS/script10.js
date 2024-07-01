const englishContent = {
  title1: "Davit Gareji",
  content1:
    "The severe beauty of the semi-desert, caves carved out of the bare rock Davit Gareja Monastery Complex, recognized by National Geographic as one of the 17 most beautiful and wild places of the world. This unique monument of Georgian Christianity is located in Sagarejo, about 70 km of Tbilisi. On the barren slopes of the Gareja Mountain, along a stretch of 25 km, the rock-hewn caves with up to 5000 monastic cells are still visible. The monastery even had a proper water supply system and reservoirs, which was necessary considering the climatic conditions.",
};

const georgianContent = {
  title: "გელათის მონასტერი",
  content:
    "უდაბნოს მკაცრი სილამაზე, შიშველ კლდეებში გამოკვეთილი მღვიმეები National Geographic-ის მიერ მსოფლიოს 17 ყველაზე ველურ და ლამაზ ადგილს შორის დასახელებული დავითგარეჯის სამონასტრო კომპლექსი დიდ შთაბეჭდილებას ახდენს მნახველზე. ეს უნიკალური ქრისტიანობის ძეგლი კახეთში, საგარეჯოს მუნიციპალიტეტში, თბილისიდან დაახლოებით 70 კმ-ში მდებარეობს. გარეჯის მთის ნახევრად უდაბურ კალთებზე 25 კილომეტრის მანძილზეა გადაჭიმული კლდეში ნაკვეთი მღვიმეები, 20-ზე მეტი ისტორიული ძეგლი, კლდეში გაჭრილია წყალშემყვანი არხები და ასევე გაკეთებულია რეზერვუარები.",
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
