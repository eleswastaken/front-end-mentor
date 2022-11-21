

// implement insert cards into a container from cards

console.log(cardsData)
const cardsContainer = document.querySelector("#cards-container");
console.log(cardsContainer)

for (card of cardsData) {
	cardsContainer.innerHTML += (createCard(card))
}


function createCard(card) {
	let texts = card.descriptionText.map(text => `<p>${text}</p>`).join("");
	let tags = card.tags.map(tag => `<li>#${tag}</li>`).join("");
	return (`<li class="max-w-md w-full bg-accent1 overflow-hidden rounded-lg relative">
        <div class="max-h-[250px] overflow-hidden" >
            <a href="${card.livePreviewURL}" target="_blank" class="w-full h-full" tabindex="-1">
                <img src="${card.imgURL}" alt="${card.imgAltText}" class="transition-transform ease-in-out duration-300 hover:scale-105 object-contain" width="448" height="250">
            </a>
        </div>
        <div class="px-6 py-4">
            <h3><a href="${card.livePreviewURL}" target="_blank" aria-label="Live Preview" title="Live Preview" 
                class="external text-white text-2xl font-semibold" >${card.title}</a></h3>
            <div class="description my-1">
               
                <div class="text-content mt-4 ml-2">
                	${texts}
                </div>
                <ul class="flex flex-wrap max-w-[300px] mt-4">
                	${tags}
                </ul>
            </div> 
            <!--
            <p class=" text-white text-opacity-70 text-base text-left">
                <time datetime="${card.date}">${card.dateStr}</time>
            </p>
            -->
            <a href="${card.githubRepoURL}" target="_blank" aria-label="Github Repository" class="absolute w-10 h-10 top-5 right-5 flex justify-center items-center rounded-md bg-accent1 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 16 16">
                    <title>Github Repo</title>
                    <path fill="#fff" d="M7.938 1a6.936 6.936 0 0 0-2.194 13.519c.347.06.477-.147.477-.33 0-.164-.009-.71-.009-1.292-1.743.321-2.194-.424-2.332-.815-.078-.2-.417-.815-.712-.98-.242-.13-.59-.45-.008-.46.546-.008.936.504 1.066.712.625 1.05 1.622.754 2.021.572.06-.45.243-.754.442-.928-1.543-.173-3.156-.771-3.156-3.425a2.7 2.7 0 0 1 .71-1.865c-.069-.173-.311-.884.07-1.838 0 0 .581-.182 1.908.711a6.438 6.438 0 0 1 1.734-.234c.59 0 1.18.078 1.735.234 1.327-.902 1.908-.711 1.908-.711.381.954.138 1.665.069 1.838.442.486.711 1.102.711 1.865 0 2.662-1.622 3.252-3.165 3.425.251.217.468.633.468 1.284 0 .928-.009 1.673-.009 1.908 0 .182.13.398.477.33a6.949 6.949 0 0 0 4.2-9.238A6.935 6.935 0 0 0 7.937 1z"/>
                </svg>
            </a>
        </div>
    </li>`);
}
