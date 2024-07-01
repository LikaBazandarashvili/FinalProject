const englishContent = {
    title1: "Dashbashi Canyon",
    content1:
      "Dashbashi Canyon is located in Kvemo Kartli, Tsalka municipality, in the gorge of the river Khrami, near the village Dashbashi. It is a natural monument on volcanic height of the river, Ktsia. It is a rare gorge of canyon, characterized with biodiversity. The Dashbashi waterfall hidden in the green attracts many visitors with its perfect atmosphere. The canyon is also popular due to the fact that the walking distance is short and anyone can easily visit this place without much effort. The most famous place in Dashbashi Canyon is the greatest waterfall.",
  };
  
  const georgianContent = {
    title: "დაშბაშის კანიონი",
    content:
      "დაშბაშის კანიონი -  ქვემო ქართლის მხარეში, წალკის მუნიციპალიტეტში, მდინარე ხრამის ხეობაში, სოფელ დაშბაშის მიდამოებში მდებარეობს, ბუნების ძეგლი მდ. ქციის (ხრამის) მიერ დაშბაშის ლავურ მაღლობზე, ვულკანოგენურ ქანებში ჩაჭრილ კალაპოტში გამომუშავებულ იშვიათი და ბიომრავლფეროვნებით გამორჩეულ კანიონისებურ ხეობას წარმოადგენს. დაშბაშის ჩანჩქერი იდილიურობითა და სილამაზით უამრავ მნახველს იზიდავს. კანიონის პოპულარობა იმითაცაა განპირობებული, რომ ფეხით გასავლელი მანძილი მცირეა და ნებისმიერ მსურველს მარტივად შეუძლია ამ საოცარ ადგილს ესტუმროს.",
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
  