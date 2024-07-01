const englishContent = {
    title1: "Rabati Castle",
    content1:
      "Rabati Fortress is located in Samtskhe  —  Javakheti administrative center in the historic district of city Akhaltsikhe - Rabati -. It is located on the bank of river Potskhovi. Rabati Fortress is currently renovated, it consists of several buildings dated back to different periods of middle age. The castle was the most important defensive object in the region, so its walls remember many hard battles. It also served as a residence for rulers of Akhaltsikhe. Fortress had three layers of walls and was connected to its surroundings by an underground tunnel.",
  };
  
  const georgianContent = {
    title: "რაბათის ციხე",
    content:
      "რაბათის ციხე  —  ისტორიული ციხე სამცხე-ჯავახეთის მხარის ადმინისტრაციული ცენტრში, ქალაქ ახალციხეში, „რაბათის“ ისტორიულ უბანში. მდებარეობს მდინარე ფოცხოვის ნაპირზე.რაბათის ციხე-კომპლექსი დღესდღეისობით რეაბილიტირებულია, იგი შუა საუკუნეების სხვადასხვა პერიოდის ნაგებობისგან შედგება.  ის რეგიონის უმნიშვნელოვანესი თავდაცვითი ნაგებობა იყო, მის კედლებს არაერთი მძიმე ბრძოლა ახსოვთ. საუკუნეების მანძილზე აქ ახალციხის მფლობელთა რეზიდენცია იყო. ციხე-სიმაგრეს შემოვლებული ჰქონდა სამი გალავანი და შემოგარენს მიწისქვეშა გვირაბით უკავშირდებოდა.",
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
  