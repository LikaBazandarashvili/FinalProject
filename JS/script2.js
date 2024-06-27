const englishContent = {
    title1: "Svaneti",
    content1:
      " Svaneti - is the highest mountainous, historical and geographical region in Georgia and is located in the Northern part of Western Georgia. Svaneti is distinguished by acute expression of individualism. The mountain picks, the cliffs, the fortress-towers have attracted the attention of travelers, tourists and fans of mountain sports. This ancient culture is very interesting with numerous cultural monuments, characteristic frescoes, traditions and impressive nature. The highest peak of Georgia, Shkhara, Tetnuldi, Shota Rustaveli, Ushba, Ailama and others.",
  };
  
  const georgianContent = {
    title: "სვანეთი",
    content:
      "სვანეთი - საქართველოს ყველაზე მაღალმთიანი ისტორიულ-გეოგრაფიული მხარეა და იგი დასავლეთ საქართველოს ჩრდილოეთ ნაწილში მდებარეობს. სვანეთი მკვეთრად გამოხატული ინდივიდუალიზმით გამოირჩევა. მწვერვალები, ციხე-კოშკები, რომლებიც თავისუფლებისა და ძლიერი სულის სიმბოლო გამხდარა, დიდი ხანია მოგზაურების, დამსვენებლებისა თუ სამთო სპორტის მოყვარულების ყურადღებას იპყრობს. ეს უძველესი კულტურის მქონე მხარე ძალიან საინტერესოა მრავალრიცხოვანი კულტურის ძეგლებით, სახასიათო ფრესკული ნიმუშებით, წეს-ჩვეულებებითა და მრავალფეროვანი, შთამბეჭდავი ბუნებით.",
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