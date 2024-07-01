const englishContent = {
    title1: "Gudauri",
    content1:
      "Gudauri Ski Resort is located in the Stepantsminda region, at an elevation of 2200 m asl. Gudauri Ski resort is 120 Km away from Tbilisi. The ski season is open from December to March. It takes about 2 hours to reach Gudauri Ski Resort from Tbilisi. There are two ways to go to Gudauri one is going by car, and another is going by minibus. Minibus usually goes from the Didube Bus Station. The road is always open. Therefore, any type of car can go to Gudauri smoothly. However, when there is a heavy snowfall, transportation is only able by using snow chains.",
  };
  
  const georgianContent = {
    title: "გუდაური",
    content:
      "სათხილამურო კურორტი გუდაური - ყაზბეგის მუნიციპალიტეტში მდებარეობს. გუდაური თბილისიდან დაახლოებით 120 კილომეტრშია. ზამთრის სეზონი გუდაურში დეკემბრიდან მარტამდე გრძელდება. გუდაურში ჩასვლა შესაძლებელია მანქანით ან მიკრო ავტობუსით. გუდაურის გზა თოვლისგან ყოველთვის გაწმენდილია და ნებისმიერი ავტომანქანით ჩასვლა მარტივად არის შესაძლებელი. თუმცა დიდთოვლობის დროს გზაზე წესდება შეზღუდვები და გადაადგილება მხოლოდ მოცურების საწინააღმდეგო ჯაჭვებით არის ნებადართული. გუდაურში არსებული ბუნებრივი პირობები კურორტის შექმნის წინაპირობა აღმოჩნდა. ",
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
  