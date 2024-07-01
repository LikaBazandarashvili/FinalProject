const englishContent = {
    title1: "Ananuri Fortress",
    content1:
      "Ananuri Fortress Complex - a fortress of the feudal era (XVI-XVIII centuries) near the village of Ananuri. It is located in eastern Georgia, in Dusheti municipality of Mtskheta-Mtianeti region, on the historical side of Mtiuleti, on the Georgian military road, at the beginning of Zhinvali reservoir at 900 meters above sea level.In the past, this place was the main key point of Aragvi Saeristavo, where it gathered, on the one hand from the north  Tergi-Aragvi valleys and on the other hand, from the middle of Kartli, the main roads coming through Dusheti.",
  };
  
  const georgianContent = {
    title: "ანანურის ციხე",
    content:
      "ანანურის ციხის კომპლექსი — ფეოდალური ხანის (XVI-XVIII საუკუნეების) ციხესიმაგრე სოფელ ანანურთან. მდებარეობს აღმოსავლეთ საქართველოში, მცხეთა-მთიანეთის მხარის დუშეთის მუნიციპალიტეტში, ისტორიულ მხარე მთიულეთში, საქართველოს სამხედრო გზაზე, ჟინვალის წყალსაცავის დასაწყისში, ზღვის დონიდან 900 - მეტრზე.წარსულში ეს ადგილი წარმოადგენდა არაგვის საერისთავოს მთავარ საკვანძო პუნქტს. კომპლექსში შემავალი ნაგებობებია: ციხე, გალავანი, კოშკები, ღვთისმშობლის ეკლესია, ღვთაების ეკლესია, ეკლესია ”მკურნალი”, სამრეკლო, რვაკუთხა საკანი და წყალსაცავები;",
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
  