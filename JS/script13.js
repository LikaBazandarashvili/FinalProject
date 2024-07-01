const englishContent = {
    title1: "Trinity Cathedral",
    content1:
      "Tbilisi's iconic church, the Holy Trinity Cathedral sits atop Elia Mountain. Its impressive dome and golden cross are visible from every point in the city centre. The brainchild of Catholicos-Patriarch Ilia II, the cathedral was built with the intention of not only commemorating the 2,000th anniversary of Christ’s birth, but also the 1,500th anniversary of the foundation of the Georgian Orthodox Church. The construction, financed by the donations of the Georgian people, took 8 years. Holy Trinity Cathedral is a shining example of religious architecture.",
  };
  
  const georgianContent = {
    title: "სამების ტაძარი",
    content:
      "წმინდა სამების საკათედრო ტაძარი, რვა ბურჯზე დაყრდნობილი გუმბათითა და 7,5 მეტრი სიმაღლის მოოქრული ჯვრით, თბილისში ელიას მთაზე დგას და ქალაქის ყველა წერტილიდან მოჩანს. იესოს დაბადებიდან 2000 და ქართული მართლმადიდებელი ეკლესიის ავტოკეფალიიდან 1500 წლისათვის ტაძრის აშენების იდეა საქართველოს პატრიარქს ილია II-ს გაუჩნდა. მშენებლობა, რომელსაც ქართველი მოქალაქეები აფინანსებდნენ 8 წელი მიმდინარეობდა და ერის ერთიანობის სიმბოლოდ იქცა. როდესაც თბილისში მოხვდები აუცილებლად ეწვიე წმინდა სამების ტაძარს რადგან ის უდიდესი სიწმინდის სიმბოლოა.",
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
  