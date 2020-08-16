const RANDOM_DOGGO = "https://dog.ceo/api/breeds/image/random";
const dogButton = document.querySelector("#btnGetDoggo");
const dogContainer = document.querySelector(".container-doggo");

function createImg(url, altText) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = altText;

  return img;
}

function placeImg(img) {
  dogContainer.innerHTML = "";
  dogContainer.appendChild(img);
}

dogButton.addEventListener("click", function () {
  console.log("click");

  const dogPromise = fetch(RANDOM_DOGGO);

  dogPromise
    .then(function (response) {
      console.log("response", response);
      const jsonPromise = response.json();
      return jsonPromise;
    })
    .then(function (jsonResponse) {
      console.log("jsonResponse", jsonResponse);
      placeImg(createImg(jsonResponse.message, "Cute Dog"));
    });
});
