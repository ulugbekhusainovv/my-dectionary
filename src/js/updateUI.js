const sound = document.getElementById("sound");
export const details = document.querySelector(".new-message");
function updataUi(data) {
  let { word, phonetic, sourceUrls, meanings, phonetics } = data[0];
  let audio;

  for (let i = 0; i < phonetics.length; i++) {
    if (phonetics[i].text && phonetics[i].audio) {
      audio = phonetics[i].audio;
      break;
    }
  }

  let verb;
  let noun;
  let nounSynonyms;
  let verbSynonyms;

  //  meanings
  meanings.forEach((mean) => {
    if (mean.partOfSpeech == "verb") {
      verb = mean.definitions;
      verbSynonyms = mean.synonyms;
    }
    if (mean.partOfSpeech == "noun") {
      noun = mean.definitions;
      nounSynonyms = mean.synonyms;
    }
  });
  details.innerHTML = `
     <div class="result">
     <div class="title-wrapper">
       <h1 id="input_value">${word} </h1>
       <h2 class="phonetics">${phonetic ? phonetic : "No phonetic"}</h2>
     </div>
     ${audio ? `<audio id="audio" src=${audio}></audio>` : ""}
     ${
       audio
         ? `<button class="audio-wrapper" id="play-btn" >
     <svg
       width="21"
       height="21"
       viewBox="0 0 21 21"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         fill-rule="evenodd"
         clip-rule="evenodd"
         d="M0 0V21L21 10.5L0 0Z"
         fill="#A445ED"
       />
     </svg>
   </button>`
         : ""
     }

   </div>
   <div class="list">
     <div class="noun-wrapper">
       <h2 id="noun">noun</h2>
       <div class="liner"></div>
     </div>
     <ul class="meaning-wrapper">
       <div class="meaning-title"><h3>Meaning</h3></div>
     ${noun.slice(0, 3).map((item) => {
       return `<li class="itmes noun-item"><h4>${item.definition}</h4></li>`;
     })}
       
       <div class="synonyms-title">
         <h3>Synonyms:</h3>
         <div class="res-link-wrapper">
         ${nounSynonyms.slice(0, 3).map((item) => {
           return `
          <a class="res-link" href="#"><h3>${
            nounSynonyms.length ? item : "No Synonyms"
          }</h3></a>`;
         })}
       </div>
       </div>
     </ul>
   </div>
   <div class="list-two">
     <div class="noun-wrapper">
       <h2 id="verb">verb</h2>
       <div class="liner"></div>
     </div>
     <ul class="meaning-wrapper">
       <div class="meaning-title"><h3>Meaning</h3></div>
       ${verb.slice(0, 2).map((item) => {
         return `<li class="itmes verb-item"><h4>${item.definition}</h4></li>`;
       })}
       <div class="source-title">
         <h5 class="source-dec">Source</h5>
         <a id="source-link" class="source-link" href="${
           sourceUrls ? sourceUrls : "No sourse"
         }"> 
         <h5> ${sourceUrls ? sourceUrls : "No sourse"}</h5>
         <svg
         width="14"
         height="14"
         viewBox="0 0 14 14"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
       >
         <path
           d="M6.09091 4.29547C6.50512 4.29547 6.84091 3.95968 6.84091 3.54547C6.84091 3.13125 6.50512 2.79547 6.09091 2.79547V4.29547ZM1.42603 3.97149L1.95635 4.50183L1.95637 4.50182L1.42603 3.97149ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0437L1.42603 12.574ZM11.2045 7.9091C11.2045 7.49489 10.8688 7.1591 10.4545 7.1591C10.0403 7.1591 9.70455 7.49489 9.70455 7.9091H11.2045ZM4.83331 8.10604C4.54041 8.39894 4.54041 8.87381 4.83331 9.16671C5.1262 9.4596 5.60107 9.4596 5.89397 9.16671L4.83331 8.10604ZM13.1667 1.89398C13.4596 1.60108 13.4596 1.12621 13.1667 0.833317C12.8738 0.540424 12.3989 0.540424 12.106 0.833317L13.1667 1.89398ZM12.6364 2.11365C13.0506 2.11365 13.3864 1.77786 13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647V2.11365ZM9 0.613647C8.58579 0.613647 8.25 0.949434 8.25 1.36365C8.25 1.77786 8.58579 2.11365 9 2.11365V0.613647ZM13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647C12.2221 0.613647 11.8864 0.949434 11.8864 1.36365H13.3864ZM11.8864 5.00001C11.8864 5.41422 12.2221 5.75001 12.6364 5.75001C13.0506 5.75001 13.3864 5.41422 13.3864 5.00001H11.8864ZM6.09091 2.79547H2.45455V4.29547H6.09091V2.79547ZM2.45455 2.79547C1.86987 2.79547 1.30913 3.02772 0.895692 3.44117L1.95637 4.50182C2.08849 4.36969 2.26769 4.29547 2.45455 4.29547V2.79547ZM0.895706 3.44116C0.482259 3.85459 0.25 4.41533 0.25 5.00001H1.75C1.75 4.81315 1.82423 4.63395 1.95635 4.50183L0.895706 3.44116ZM0.25 5.00001V11.5455H1.75V5.00001H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6909 0.895685 13.1043L1.95637 12.0437C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5178 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6909 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.9091H9.70455V11.5455H11.2045ZM5.89397 9.16671L13.1667 1.89398L12.106 0.833317L4.83331 8.10604L5.89397 9.16671ZM12.6364 0.613647H9V2.11365H12.6364V0.613647ZM11.8864 1.36365V5.00001H13.3864V1.36365H11.8864Z"
           fill="#757575"
         />
       </svg>
         </a>
       </div>
     </ul>
   </div>
   `;

  const audioEl = document.querySelector("#audio");
  const buttonPlay = document.querySelector("#play-btn");
  const synonymLink = document.querySelector(".res-link-wrapper");
  const input = document.querySelector("#search");
  buttonPlay.addEventListener("click", () => {
    audioEl.play();
  });

  synonymLink.addEventListener("click", (e) => {
    input.value = e.target.textContent;
    input.focus();
  });
}

export default updataUi;
/* 
 <div class="result">
            <div class="title-wrapper">
              <h1 id="input_value">keyboard</h1>
              <h2 class="phonetics">/ˈkiːbɔːd/</h2>
            </div>
            <div class="audio-wrapper" id="play-btn">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0V21L21 10.5L0 0Z"
                  fill="#A445ED"
                />
              </svg>
            </div>
          </div>
          <div class="list">
            <div class="noun-wrapper">
              <h2 id="noun">noun</h2>
              <div class="liner"></div>
            </div>
            <ul class="meaning-wrapper">
              <div class="meaning-title"><h3>Meaning</h3></div>
              <li class="itmes noun-item">
                <h4>
                  (etc.) A set of keys used to operate a typewriter, computer
                  etc.
                </h4>
              </li>
              <li class="itmes noun-item">
                <h4>
                  A component of many instruments including the piano, organ,
                  and harpsichord consisting of usually black and white keys
                  that cause different tones to be produced when struck.
                </h4>
              </li>
              <li class="itmes noun-item">
                <h4>
                  A device with keys of a musical keyboard, used to control
                  electronic sound-producing devices which may be built into or
                  separate from the keyboard device.
                </h4>
              </li>
              <div class="synonyms-title">
                <h3>Synonyms</h3>
                <div class="res-link-wrapper">
                  <a class="res-link" href="#"><h3>electronic</h3></a>
                  <a class="res-link" href="#"><h3>keyboard</h3></a>
                </div>
              </div>
            </ul>
          </div>
          <div class="list-two">
            <div class="noun-wrapper">
              <h2 id="verb">verb</h2>
              <div class="liner"></div>
            </div>
            <ul class="meaning-wrapper">
              <div class="meaning-title"><h3>Meaning</h3></div>
              <li class="itmes verb-item">
                <h4>To type on a computer keyboard.</h4>
              </li>
              <li class="itmes verb-value verb-item">
                <h4 class="verb-value">
                  “Keyboarding is the part of this job I hate the most.”
                </h4>
              </li>
              <div class="source-title">
                <h5 class="source-dec">Source</h5>
                <a id="source-link" class="source-link" href="#"
                  ><h5>https://en.wiktionary.org/wiki/keyboard</h5>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.09091 4.29547C6.50512 4.29547 6.84091 3.95968 6.84091 3.54547C6.84091 3.13125 6.50512 2.79547 6.09091 2.79547V4.29547ZM1.42603 3.97149L1.95635 4.50183L1.95637 4.50182L1.42603 3.97149ZM1.42603 12.574L1.95638 12.0437L1.95637 12.0437L1.42603 12.574ZM11.2045 7.9091C11.2045 7.49489 10.8688 7.1591 10.4545 7.1591C10.0403 7.1591 9.70455 7.49489 9.70455 7.9091H11.2045ZM4.83331 8.10604C4.54041 8.39894 4.54041 8.87381 4.83331 9.16671C5.1262 9.4596 5.60107 9.4596 5.89397 9.16671L4.83331 8.10604ZM13.1667 1.89398C13.4596 1.60108 13.4596 1.12621 13.1667 0.833317C12.8738 0.540424 12.3989 0.540424 12.106 0.833317L13.1667 1.89398ZM12.6364 2.11365C13.0506 2.11365 13.3864 1.77786 13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647V2.11365ZM9 0.613647C8.58579 0.613647 8.25 0.949434 8.25 1.36365C8.25 1.77786 8.58579 2.11365 9 2.11365V0.613647ZM13.3864 1.36365C13.3864 0.949434 13.0506 0.613647 12.6364 0.613647C12.2221 0.613647 11.8864 0.949434 11.8864 1.36365H13.3864ZM11.8864 5.00001C11.8864 5.41422 12.2221 5.75001 12.6364 5.75001C13.0506 5.75001 13.3864 5.41422 13.3864 5.00001H11.8864ZM6.09091 2.79547H2.45455V4.29547H6.09091V2.79547ZM2.45455 2.79547C1.86987 2.79547 1.30913 3.02772 0.895692 3.44117L1.95637 4.50182C2.08849 4.36969 2.26769 4.29547 2.45455 4.29547V2.79547ZM0.895706 3.44116C0.482259 3.85459 0.25 4.41533 0.25 5.00001H1.75C1.75 4.81315 1.82423 4.63395 1.95635 4.50183L0.895706 3.44116ZM0.25 5.00001V11.5455H1.75V5.00001H0.25ZM0.25 11.5455C0.25 12.1301 0.482269 12.6909 0.895685 13.1043L1.95637 12.0437C1.82422 11.9115 1.75 11.7323 1.75 11.5455H0.25ZM0.895678 13.1043C1.30913 13.5178 1.86988 13.75 2.45455 13.75V12.25C2.26768 12.25 2.08849 12.1758 1.95638 12.0437L0.895678 13.1043ZM2.45455 13.75H9V12.25H2.45455V13.75ZM9 13.75C9.58466 13.75 10.1454 13.5178 10.5588 13.1043L9.49818 12.0436C9.36603 12.1758 9.18683 12.25 9 12.25V13.75ZM10.5588 13.1043C10.9723 12.6909 11.2045 12.1301 11.2045 11.5455H9.70455C9.70455 11.7323 9.63033 11.9115 9.49818 12.0436L10.5588 13.1043ZM11.2045 11.5455V7.9091H9.70455V11.5455H11.2045ZM5.89397 9.16671L13.1667 1.89398L12.106 0.833317L4.83331 8.10604L5.89397 9.16671ZM12.6364 0.613647H9V2.11365H12.6364V0.613647ZM11.8864 1.36365V5.00001H13.3864V1.36365H11.8864Z"
                      fill="#757575"
                    />
                  </svg>
                </a>
              </div>
            </ul>
          </div>
*/
