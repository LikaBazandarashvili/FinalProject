const englishContent = {
    title1: "Gremi",
    content1:
      "Gremi -  the Georgian Orthodox Cathedral is located in Kakheti, in Kvareli, in the citadel of the east of Gremi, on a high hill. It was built by the King Levan in 1565. The paintings were finished in 1577. The history of Gremi, as a city, begins from XV century, when the first king of Kakheti George turn it into the capital of Kakheti Kingdom. This status was maintained by Gremi for over two centuries. There were active bookish activities here and caravan roads as well. That is why it became the center of political, economic and cultural life of Kakheti.",
  };
  
  const georgianContent = {
    title: "გრემი",
    content:
      "გრემი —  ქართული მართლმადიდებლური ტაძარი, მდებარეობს კახეთში, ყვარლის მუნიციპალიტეტის სოფელი გრემის აღმოსავლეთით ციტადელში, მაღალ გორაკზე. ააგო კახთა მეფე ლევანმა 1565 წელს. მოხატვა დაუმთავრებიათ 1577 წელს.გრე­მის, რო­გორც ქა­ლა­ქის ის­ტო­რია XV სა­უ­კუ­ნი­დან იწყე­ბა, რო­ცა იგი კა­ხე­თის პირ­ველ­მა მე­ფემ გი­ორ­გიმ კა­ხე­თის სა­მე­ფოს დე­და­ქა­ლა­ქად აქ­ცია. ეს სტა­ტუ­სი გრემ­მა ორი სა­უ­კუ­ნის გან­მავ­ლო­ბა­ში შე­ი­ნარ­ჩუ­ნა. აქ მიმ­დი­ნა­რე­ობ­და აქ­ტი­უ­რი მწიგ­ნობ­რუ­ლი საქ­მი­ა­ნო­ბა, აქ გა­დი­ო­და სა­ქა­რავ­ნო გზე­ბი.",
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
  