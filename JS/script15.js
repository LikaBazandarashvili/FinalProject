const englishContent = {
    title1: "Khertvisi Fortress",
    content1:
      "Khertvisi fortress, Middle age castle is located in village Khertvisi on the estuary of rivers Paravani and Mtkvari on a tall rocky mountain in Javakheti southern Georgia. Khertvisi was an active fortress during feudal ages.Since 2007, Khertvisi together with Vardzia monastery is included in UNESCO world heritage testing list. According to information from chronicler Leonti Mroveli, which is based on oral tradition, during the eastern conquest, in 20’s of IV century BC, Alexander the Great, together with other fortified cities visited Khertvisi as well.",
  };
  
  const georgianContent = {
    title: "ხერთვისის ციხე",
    content:
      "ხერთვისის ციხე —  ციხესიმაგრე სამხრეთ საქართველოში. მდებარეობს, ჯავახეთში, სოფელ ხერთვისში, მდინარე ფარავნისა და მტკვრის შესართავთან, მაღალ კლდოვან მთაზე. ხერთვისი მოქმედი სიმაგრე იყო ფეოდალური ხანის მთელ მანძილზე. 2007 წლის 24 ოქტომბრიდან ხერთვისი ვარძიის მონასტერთან ერთად შეტანილია იუნესკოს მსოფლიო მემკვიდრეობის საცდელ სიაში. ხერთვისი ბევრჯერ გადაუკეთებიათ, შეიმჩნევა ადრინდელი შუა საუკუნეების სამშენებლო ფენა. ციხე შედგება ციტადელისა და გალავნისაგან. ციტადელი მთის, კლდოვან ქიმზეა აღმართული, ჩრდილო-აღმოსავლეთიდან მიუდგომელია.",
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
  