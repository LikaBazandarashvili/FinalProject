const englishContent = {
    title1: "Prometheus Cave",
    content1:
      "Natural monument Prometheus Cave is located in Tskaltubo municipality in Imereti. The Prometheus Cave is a notable beautiful natural monument of the world. It's about 70 million years old. This beautifully shaped karst cave with stunning strips of stalactites and stalagmites once again will convince you of the enormous power of nature and will travel you in the fairy world. In the cave, it is possible to walk through the length of 1420 m, see the halls and travel by boat on the river flow. When walking in the cave, there are  - petrification waterfalls - .",
  };
  
  const georgianContent = {
    title: "პრომეთეს მღვიმე",
    content:
      "პრომეთეს მღვიმის ბუნების ძეგლი - იმერეთის რეგიონში, წყალტუბოს მუნიციპალიტეტში მდებარეობს. ის მიწის ზედაპირიდან 40 მ-ის სიღრმეშია წარმოქმნილი. პრომეთეს მღვიმე მსოფლიოს მასშტაბით გამორჩეული სილამაზის ბუნების ძეგლია. მისი ასაკი დაახლოებით, 60-70 მილიონი წელია. სტალაქტიდებისა და სტალაგმიტების გასაოცარი ნაღვენთი ფორმებით მორთული ეს კარსტული მღვიმე, კიდევ ერთხელ დაგარწმუნებთ ბუნების უსაზღვრო შესაძლებლობებში და გამოგზაურებთ ზღაპრულ სამყაროში. პრომეთეს მღვიმე მდებარეობს წყალტუბოს მუნიციპალიტეტის სოფელ ყუმისთავში, მდინარე ყუმის აუზში. ",
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
  