const englishContent = {
    title1: "Abanotubani",
    content1:
      "Tbilisi's historic districts on both banks of the Mtkvari river have survived many wars and raids. One of the oldest among those districts is - Abanotubani - mentioned in the legend of the founding of Tbilisi by King Vakhtang Gorgasali „in the 5th century. The existence of the previous city is confirmed by the 4th-century map created by the Roman geographer Castorius, where Tbilisi is called - Philado. Tbilisi, a fortress city, is also mentioned in the 360s chronicle - Moktsevai Kartlisai which tells the story of how Georgians converted to Christianity.",
  };
  
  const georgianContent = {
    title: "აბანოთუბანი",
    content:
      "მრავალი ომისა და რბევის გადამტან თბილისს დღემდე შემორჩა მდინარე მტკვრის ორივე ნაპირზე არსებული ისტორიული უბნები. მათ შორის ერთ-ერთი უძველესია აბანოთუბანი  -  ადგილი, რომელსაც მეფე ვახტანგ გორგასლის მიერ V საუკუნეში თბილისქალაქის დაარსების ლეგენდა უკავშირდება. თუმცა მეფე გორგასლამდე აქ ქალაქის არსებობას რომაელი გეოგრაფის კასტორიუსის IV საუკუნის რუკა ადასტურებს, სადაც თბილისი აღნიშნულია, როგორც „ფილადო“. აგრეთვე, თბილისი, როგორც ციხე-ქალაქი, ნახსენებია 360-იანი წლების მატიანეში „მოქცევაი ქართლისაი“.  დღეს აქ 10-ზე მეტი აბანოა.",
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
  
    titleElement.style.fontSize = "x"
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