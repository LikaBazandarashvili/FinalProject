const englishContent = {
    title1: "Metekhi Church",
    content1:
      "Metekhi Church of the Nativity of the Virgin Mary is located in the historical Metekhi,  in old Tbilisi. The main sanctuary of the temple is the tomb of St. Shushanik. After the ecclesiastical split between the Armenians and the Georgians at the beginning of the 7th century, Catholicos Kyrion transferred the remains of the saint from the small town of Tsurtavi to the Metekhi temple. The remains of the Holy Queen are in the deacons place. It is known that Queen Tamar adorned the body of the Blessed Queen with gilded clothes and paid special homage to her.",
  };
  
  const georgianContent = {
    title: "მეტეხის ტაძარი",
    content:
      "მეტეხის ღვთისმშობლის შობის სახელობის ტაძარი მდებარეობს თბილისის, უძველეს ისტორიულ მეტეხში, მტკვრის სანაპიროზე.ტაძრის უმთავრეს სიწმინდეს წარმოადგენს წმინდა შუშანიკის საფლავი. VII საუკუნის დასაწყისში სომეხ-ქართველთა საეკლესიო განხეთქილების შემდეგ კათოლიკოსმა წმინდანის ნეშტი ცურტავიდან მეტეხის ტაძარში გადმოასვენა. წმინდანი დედოფლის ნეშტი ეკლესიის სადიაკვნეშია. ცნობილია რომ თამარ მეფემ მოოქროვილი სამოსით შეამკო დედოფლის სხეული და პატივს მიაგებდა მას. ადრე ტაძარს ჰქონდა XVII საუკუნეში მოჭედილი თავისი ხატიც – ჩვილედი ღვთისმშობლისა.",
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
  