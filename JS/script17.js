const englishContent = {
    title1: "Birtvisi",
    content1:
      "The fortress complex of Birtvisi is located in Kvemo Kartli in the gorge of the river Algeti north-east from Tetritskaro. Birtvisi fortress is witness to the great history of Georgia. In it’s time the fortress was considered to be impregnable. It is located naturally inaccessible place. Birtvisi is not a fortress which is surrounded by fortress walls and towers. There is a large territory surrounded by rocky Mountains. The builders chose this natural fortress. After that they did a lot of work to artificially strengthen all exits and suspicious places. ",
  };
  
  const georgianContent = {
    title: "ბირთვისი",
    content:
      "ბირთვისის ციხის კომპლექსი მდებაორებს ქვემო ქართლში ალგეთის ხეობაში.ბირთვისის ციხესიმაგრე საქართველოს დიდი ისტორიის მოწმეა თავის დროზე ბირთვისის ციხე აუღებლადაც ითვლებოდა იგი ბუნებრივად მიუდგომელ ადგილზე მდებარეობს. ბირთვისი არ არის ციხე რომელსაც გალავანი და კოშკები შემოფარგლავს. აქ მაღლა აზიდულ მთებით შემოფარგლულ დიდ ტერიტორიაზე შემოსასვლელის დონის ქვემოთ კლდოვანი მთებია გაფანტული. ციხის ამგებს სწორედ ეს ბუნებრივი სიმაგრე შეურჩევიათ. ამის შემდეგ მათ დიდი მუშაობა ჩაუტარებიათ ყველა საეჭვო ადგილების ხელოვნურად გამაგრებისათვის. ",
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
  