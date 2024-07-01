const englishContent = {
    title1: "Dadiani Palace",
    content1:
      "Dadiani Palace was the residency of Dadiani, princes of Samegrelo. It was built in17th century by the prince of Odishi, Levan Dadiani. It is located in the center of Zugdidi. Nowadays, Dadiani Palace is a historical and architectural state museum. It is part of the palace complex of Samegrelo, which also includes a palace for Ekaterine Chavchavadze- Dadiani, a residence of her son Niko Dadiani, a church, and an adjacent botanical garden. The Queen's Palace was reconstructed in the1860s  by German architect Jacob Rice. Before that, It was a palace of Pupi.",
  };
  
  const georgianContent = {
    title: "დადიანების სასახლე",
    content:
      "დადიანების სასახლე  -  სამეგრელოს მთავრების, დადიანების რეზიდენცია იყო. ის – ლევან II დადიანმა ააშენა, მე-17 ს-ში. იგი ქალაქ ზუგდიდის ცენტრში მდებარეობს. დადიანების სასახლე დღეისათვის წარმოადგენს ისტორიულ-ეთნოგრაფიულ მუზეუმს. იგი სამეგრელოს სასახლე-კომპლექსშია მოთავსებული (დედოფლის სასახლე, ნიკოსეული სასახლე, მთავრისეული ტაძარი და სასახლესთან არსებული დეკორატიული ბაღი). დედოფლისეული სასახლე XIX ს- შია გადაკეთებული არქიტექტორის რაისის მიერ, მანამდე ის სამეგრელოს მთავრის დავითის დის სასახლე იყო. რაისმა II სართულს თაღები დააშენა. ",
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
  