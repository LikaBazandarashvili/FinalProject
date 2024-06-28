const englishContent = {
    title1: "Batumi Botanical Garden",
    content1:
      "Batumi Botanical Garden Botanical Garden in Adjara, 9 km far from the city Batumi, on the coastline between the Green Cape and the River Chaqvistskali mouth. The garden is about 1 km of the coastline.Batumi Botanical Garden  One of the largest and richest botanical gardens in the world, it is situated on 111 hectares and was set up in 1912. The garden includes the Colchis Forest Reserve and many different floristic landscapes. There are many species and varieties of plants in the garden. The botanical garden is the best place for nature lovers.",
  };
  
  const georgianContent = {
    title: "ბათუმის ბოტანიკური ბაღი",
    content:
      "ბათუმის ბოტანიკური ბაღი - ბოტანიკური ბაღი აჭარაში, ქალაქ ბათუმიდან 9კმ დაშორებით. ბაღს ზღვის სანაპირო ზოლის დაახლოებით 1 კმ სიგრძის მონაკვეთი უკავია. ბათუმის ბოტანიკური ბაღი მსოფლიოში ერთ-ერთი უდიდესი და მდიდარი ბოტანიკური ბაღი, გაშენებულია 111 ჰექტარზე და დაარსებულია 1912 წელს. ბაღში შედის კოლხეთის ტყის ნაკრძალი და მრავალი განსხვავებული ფლორისტული ლანდშაპი. ბოტანიკურ ბაღს მსოფლიოში ანალოგი არ მოეძებნება იმ თვალსაზრისით, რომ აქ თანაარსებობენ სრულიად განსხვავებული კლიმატური და ლანდშაფტური ზონებიდან აღებული მცენარეთა სახეობები. ",
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

    contentElement.style.marginBottom = "30px"
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