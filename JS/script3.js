const englishContent = {
    title1: "Narikala",
    content1:
      "Narikala Fortress is nowadays the leading sighting among the most visited places in Tbilisi by tourists. No one I emphasize, no one leaves Tbilisi without walking around this amazing fortress, which is stunning at night. Narikala Fortress draws your attention from all sides of Tbilisi, you can notice it from almost every part of Tbilisi. It overlooks the Mtkvari River. Narikala consists of two walled sections between the sulphur baths and the Tbilisi Botanical Garden. This fortress sometimes was even called Shuris-tsikhe, which means The Rival Fortress.",
  };
  
  const georgianContent = {
    title: "ნარიყალა",
    content:
      "ნარიყალას ციხესიმაგრე დღეისათვის ყველაზე პოპულარული ადგილია როგორც ადგილობრივებისთვის ისე ტურისტებისთვის. შეიძლება ითქვას, რომ თბილისი ნარიყალას გარეშე თავის თვითმყოფადობას ვერ შეინარჩუნებდა, ძველი თბილისის სიამაყე ნამდვილად იმსახურებს ამ ყურადღებას. ნარიყალას ციხესიმაგრე თითქმის თბილისის ყველა მხრიდან ჩანს განსაკუთრებით მშვენიერია ღამით. ის გადაჰყურებს მტკვარს, რაც კიდევ უფრო მეტ ხიბლს მატებს გარემოს. ის მოქცეულია თბილისის ორ უმნიშვნელოვანესს ადგილს გოგირდის აბანოებსა (ძველ თბილისში, აბანოთუბანში,) და ბოტანიკური ბაღს შორის",
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