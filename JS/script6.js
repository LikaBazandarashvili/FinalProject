const englishContent = {
    title1: "Jvari Monastery",
    content1:
      "Jvari Monastery- VI century church and monastery, located in the east of Mtskheta, at the mouth of the river Mtkvari and Aragvi, on the rocky mountain peak. Upon adoption of Christianity, King Mirian raised a high wooden cross on this territory, which was worshiped by other Caucasian Christian nations. Guaram, the leader of Kartli, built a small church next to the cross nowadays known as -a small cross-. in VII century Stepamoz I built a big temple next to a small cathedral, nowadays known as Jvari monastery. The wooden cross got covered up by a temple.",
  };
  
  const georgianContent = {
    title: "ჯვრის მონასტერი",
    content:
      "ჯვრის მონასტერი, ჯაჭვის საყდარი  — VI საუკუნის ტაძარი და მონასტერი, მდებარეობს მცხეთის აღმოსავლეთით, მდინარეების მტკვრისა და არაგვის შესართავთან, კლდოვანი მთის წვერზე. მცხეთის ჯვარი იუნესკოს მსოფლიო ხელოვნების საგანძურთა ნუსხაში შედის.ქრისტიანობის მიღებისთანავე ამ ადგილას მეფე მირიანმა ხის მაღალი ჯვარი აღმართა, რომელსაც თაყვანს სცემდნენ კავკასიის სხვა ქრისტიანი ერებიც. VI ს-ის ბოლოს და VII ს-ის დასაწყისში გუარამის ძემ ერისმთავარმა სტეფამოზმა მცირე ტაძრის გვერდით დიდი ტაძარი დღევანდელი ჯვარი, რომელიც ზედ გადაეხურა ხის ჯვარს. ",
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
  
    titleElement.style.fontSize = "0x"
    contentElement.style.marginBottom = "30px"
  
  
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