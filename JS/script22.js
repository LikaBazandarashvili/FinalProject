const englishContent = {
    title1: "Mtirala Park",
    content1:
      "Mtirala National Park- this is the national park located in  whole Adjara, between Kobuleti, Khelvachauri, and Keda municipalities. The administrative center is located in Chakvi, and as for the visitors center, one can see in the village of Chakvistavi. At 1761 meters from sea level, there is a mountain, which wears the same name. Here is located the park itself. This place is said to be the most humid place not only in Georgia, but also, in the whole Europe. These are the reasons, why this mountain was called - Mtirala - , ( - The Weeper-  in English).",
  };
  
  const georgianContent = {
    title: "მტირალას პარკი",
    content:
      "მტირალას ეროვნული პარკი — ეროვნული პარკი აჭარაში. ადმინისტრაციული შენობა მდებარეობს ჩაქვში, ხოლო ვიზიტორთა ცენტრი - ჩაქვისთავში. ამავე სახელწოდების მთა, რომელზეც პარკი მდებარეობს, აღმართულია ზღვის დონიდან 1761 მ-ზე. ეს ადგილი ითვლება ყველაზე ტენიან ადგილად არა მხოლოდ საქართველოში, არამედ ევროპაშიც, ვინაიდან მისი ხშირი სტუმარია წვიმა და ნისლი. სწორედ ამ მიზეზით ეწოდა მთას -მტირალა- . მტირალას ეროვნული პარკის ტერიტორია მდიდარია ფლორითა და ფაუნით. გავრცელებულია ტყის მცენარეულობა, წიფლნარებითა და კოლხური ტიპის ტყით წარმოდგენილი. ",
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
  