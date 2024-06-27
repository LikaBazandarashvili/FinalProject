const englishContent = {
    title1: "Vardzia",
    content1:
      " Vardzia is an ancient cave monastery complex located in southern Georgia, near Aspindza. It was established in the 12th century during Queen Tamar's reign. Carved into the cliffs of Erusheti Mountain, Vardzia stretches along steep slopes, featuring caves, tunnels, and rooms. This site served as a stronghold, religious center, and vibrant hub, showcasing medieval Georgian architecture. Today, Vardzia stands as a testament to Georgia's history and spiritual legacy, attracting visitors who marvel at its blend of natural beauty and historical intrigue.",
  };
  
  const georgianContent = {
    title: "ვარძია",
    content:
      "ვარძია კლდეში ნაკვეთი სამონასტრო ანსამბლი და XII - საუკუნეების ქართული მხატვრული ძეგლია. მდებარეობს ჯავახეთში, ასპინძის რაიონში ზღვის დონიდან 1300 მეტრზე. ოროგრაფიული სქემის მიხედვით ვარძია მდებარეობს ერუშეთის ქედის აღმოსავლეთის განტოტების ბოლოს. ვარძიის უკიდურესი ზედა გამოქვაბული ზღვის დონიდან 1462 მ-ზეა. აქ არის სატრაპეზოები, სენაკები, საკუჭნაოები, დამხმარე სათავსოები და 25 მარანი 185 ქვევრით. 2006 წლის 7 ნოემბერს, საქართველოს პრეზიდენტის ბრძანებულების თანახმად მიენიჭა ეროვნული მნიშვნელობის კულტურის უძრავი ძეგლის კატეგორია.",
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