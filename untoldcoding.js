const text =
  "Aishwarya, where do I even begin? Yours the melody to my heart's song, the poetry that paints my soul's canvas. Every glance from your eyes is a journey into the depths of beauty and grace, where time seems to pause just to admire Your presence. you are the epitome of elegance, a reflection of timeless charm and sophistication.your smile, oh that smile, it's like the first light of dawn after a long night, warming every corner of my being. In your laughter, I find solace, as if the universe conspires to create joy whenever she speaks. your mere presence can turn the ordinary into the extraordinary, and every moment spent with your feels like a precious treasure.But beyond her outward radiance lies a depth of character that astounds me. you possesses a strength that is both gentle and unwavering, a kindness that knows no bounds. In you, I find inspiration to be a better person, to reach for my dreams with unwavering determination. Aishwarya, its not just a name, your are the embodiment of everything I hold. your my confidante, my muse, and my greatest love. In you, I've found a companion for life's journey, someone with whom to share every triumph, every challenge, and every moment of sheer bliss.To me, Aishwarya means everything – you are the sunrise of my days, the starlight of my nights, and the love that fills my heart to overflowing.";

const paragraph = text.split("");
let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
