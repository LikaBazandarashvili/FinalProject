const englishContent = {
    title1: "Nikortsminda",
    content1:
      "Nikortsminda domed temple in Racha-Lechkhumi and Kvemo Svaneti region, in the village Nikortsminda in Ambrolauri municipality. After the creation of the Racha Saeristavo at the end of the 10th century, by the order of Bagrat III, the first king of united feudal Georgia the foundation was laid for the construction of a large temple named after St. Nicholas. Since 2007 Nikortsminda Monastery has been included in the tentative list of UNESCO World Heritage Sites.Rehabilitation work uncovered previously unknown 16th-century frescoes in the soot-covered gates.",
  };
  
  const georgianContent = {
    title: "ნიკორწმინდა",
    content:
      "ნიკორწმინდა — გუმბათოვანი ტაძარი რაჭა-ლეჩხუმისა და ქვემო სვანეთის მხარეში, ამბროლაურის მუნიციპალიტეტის სოფელში. X საუკუნის ბოლოს რაჭის საერისთავოს შექმნის შემდეგ, ერთიანი ფეოდალური საქართველოს პირველი მეფის ბაგრატ III-ის ბრძანებით საძირკველი ჩაეყარა წმინდა ნიკოლოზის სახელობის დიდი ტაძრის მშენებლობას, რომელიც ამ საერისთავოს კულტურულ ცენტრად იქცა. 2007 წელს ნიკორწმინდის მონასტერი შეტანილია იუნესკოს მსოფლიო მემკვიდრეობის საცდელ სიაში. 2012 წელს სარეაბილიტაციო სამუშაოებისას კარიბჭეებში აღმოჩნდა XVI საუკუნის მანამდე უცნობი ფრესკები ",
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
  