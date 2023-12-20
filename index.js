const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor", "Dean of Cyber Security and Digital Forensic at Princeton", "All the GLORY GOES TO THE LORD JESUS CHRIST AND THE FATHER OF ALL MANKIND AND BY THE STRENGTH OF HIS SPIRIT"];

let careerIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++; // increment all the time one after another

    // display character in the body of the html page
    containerEl.innerHTML = ` 
    <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
        careerIndex
    ].slice(0, characterIndex)}</h1`;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex === careers.length){
    careerIndex = 0;
   }
    setTimeout (updateText, 400);
}