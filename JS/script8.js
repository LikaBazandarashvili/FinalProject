const englishContent = {
    title1: "Bagrati Cathedral",
    content1:
      "Bagrati Cathedral is located in Kutaisi, Imereti. It was built in 1003, during the reign of Bagrat III. Bagrati Temple is an important monument of Georgian culture, both in terms of architectural solution and symbolic significance. It is a symbol of the unity and strength of our country. the Dormition of the Virgin Bagrati Cathedral stands upon Ukimerioni Hill in Kutaisi, making it visible from every part of the city. This area had been inhabited from as early as the 2nd millennium BCE with the first Christian church being built here in the 4th century.",
  };
  
  const georgianContent = {
    title: "ბაგრატის ტაძარი",
    content:
      "ბაგრატის ტაძარი იმერეთის მხარეში, ქალაქ ქუთაისში მდებარეობს, უქიმერიონის გორაზე და ქალაქის ნებისმიერი კუთხიდან მოჩანს. იგი აგებულია 1003 წელს ბაგრატ III-ის მეფობის ხანაში. ბაგრატის ტაძარი ქართული კულტურის მნიშვნელოვანი ძეგლია როგორც არქიტექტურული გადაწყვეტით ასევე სიმბოლური მნიშვნელობით. ის ჩვენი ქვეყნის ერთიანობისა და ძლიერების სიმბოლოა. ტაძარს 2010 წელს რეკონსტრუქცია ჩაუტარდა. ისტორიული წყაროების მიხედვით, ეს ტერიტორია უკვე ძვ.წ. II ათასწლეულში იყო განაშენიანებული. პირველი ქრისტიანული ეკლესია კი აქ IV საუკუნეში არსებობდა.",
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

    contentElement.style.marginBottom = "40px"
    contentElement.style.marginTop = "0px"
  
  
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