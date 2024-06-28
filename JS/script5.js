const englishContent = {
    title1: "Svetitskhoveli Cathedral",
    content1:
      "The Svetitskhoveli Cathedral, situated in Mtskheta, Georgia, is a paramount example of Georgian medieval architecture dating back to the 11th century. it is renowned for its historical and spiritual significance. Known as the -Life-Giving Pillar- the cathedral is revered as the burial site of Christ's mantle brought to Georgia by a Jewish traveler from Jerusalem. it has been the site for royal coronations and burials of Georgian kings. Svetitskhoveli is not only a religious epicenter but also a symbol of Georgian national identity and cultural heritage.",
  };
  
  const georgianContent = {
    title: "სვეტიცხოვლის ტაძარი",
    content:
      "სვეტიცხოვლის საკათედრო ტაძარი საქართველოს მართლმადიდებელი ეკლესიის მთავარი საპატრიარქო საკათედრო ტაძარი, საქართველოს დედა-ტაძარი, საქართველოს კათოლიკოს-პატრიარქთა ინთრონიზაციის ადგილი, შუა საუკუნეების საქართველოს მრავალი მეფის, მათი ოჯახის წევრების და პატრიარქთა საკრძალავი, XI საუკუნის ქართული ხუროთმოძღვრების ძეგლი ერთ-ერთი ოთხ დიდ კათედრალთაგან. მდებარეობს თბილისიდან 20 კმ დაშორებით, ქალაქ მცხეთაში. სვეტიცხოველში დაკრძალულია უფლის კვართი და წმ.ელია წინასწარმეტყველის მოსასხამი. იუნესკოს მსოფლიო კულტურული მემკვიდრეობის ძეგლი.",
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
  
    titleElement.style.fontSize = "0x"
    contentElement.style.marginBottom = "15px"
  
  
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