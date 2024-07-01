const englishContent = {
    title1: "Tsinandali",
    content1:
      "Tsinandali museum complex - Alexander Chavchavadze House-Museum, beautiful garden of Tsinandali and tunique wine cellar. Located in the Kakheti region, Telavi municipality, village Tsinandali. The Tsinandali Palace belonged to Garsevan Chavchavadze  Ambassador of Georgia in Russia during Erekle II. The palace was inherited by his son, Alexander, the founder of Georgian romanticism and public figure. Chavchavadze Palace was built in 1886 and is a House-Museum of Alexander Chavchavadze. There are preserved personal belongings of Chavchavadze family members.",
  };
  
  const georgianContent = {
    title: "წინანდალი",
    content:
      "წინანდლის სამუზეუმო კომპლექსი  -  ალექსანდრე ჭავჭავაძის სახლ-მუზეუმი, წინანდლის ულამაზესი ბაღი და მე-19 საუკუნის უნიკალური ღვინის მარანი. მდებაორებს კახეთის მხარეში, თელავის მუნიციპალიტეტში, წინანდალში.წინანდლის სასახლე ეკუთვნოდა გარსევან ჭავჭავაძეს, ერეკლე II-ის დროს საქართველოს სრულუფლებიან ელჩს რუსეთში. სასახლე მემკვიდრეობით მის ვაჟს, ალექსანდრეს გადაეცა, ქართული რომანტიზმის ფუძემდებელს და საზოგადო მოღვაწეს.წინანდლის ჭავჭავაძეების სასახლის შენობა 1886 წელს აშენდა და ამჟამად ალექსანდრე ჭავჭავაძის სახლ-მუზეუმს წარმოადგენს. ",
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
  