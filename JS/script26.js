const englishContent = {
    title1: "Samtavisi",
    content1:
      "Samtavisi complex is located in Shida Kartli region, Kaspi municipality 11 km away from Kaspi. The monument belongs the XI century, the date of building this church is 1030, which is written in the inscriptions of it. From the second half of the XII century to the beginning of the XIII century, firstly Samtavisi was possessed by the Catholicos of Kartli, Michael, and then by Mtsignobartukhutsesi (high-ranking political advisor or minister in feudal Georgia) Anton. From the first half of the XIV century, it was owned by the Zevdginidze-Amilakhvri family.",
  };
  
  const georgianContent = {
    title: "სამთავისი",
    content:
      "სამთავისის კომპლექსი შიდა ქართლში, კასპის მუნიციპალიტეტში მდებარეობს. იგი XI საუკუნის ძეგლია, ტაძრის წარწერებში აგების თარიღად მითითებულია 1030 წელი. XII საუკუნის მეორე ნახევრიდან XIII საუკუნის დასაწყისამდე, სამთავისი ჯერ ქართლის კათალიკოსს მიქაელს ეკავა, შემდეგ - ანტონ ეპისკოპოსს, XIV საუკუნის პირველი ნახევრიდან კი იგი ზევდგინიძე-ამილახვრებს ებოძათ. XV საუკუნეში ძეგლს გუმბათი, დასავლეთის კარი, თაღები, გუმბათქვეშა პილონი და ფასადები ჩამოენგრა და იგი XV ს-ის ბოლოსა და XVI საუკუნის დასაწყისში ადგილობრივმა ფეოდალებმა აღადგინეს. ",
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
  