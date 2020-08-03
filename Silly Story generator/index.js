let customName = document.getElementById("customname");
let randomize = document.querySelector(".randomize");
let story = document.querySelector(".story");

function randomValueFromArray(array){
    let random = Math.floor(Math.random()*array.length);
    return array[random];
}


let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";


randomize.addEventListener('click', result);


function result(){
    newStory = storyText;

    let Xitem = randomValueFromArray(insertX);
    let Yitem = randomValueFromArray(insertY);
    let Zitem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', Xitem);
    newStory = newStory.replace(':inserty:', Yitem);
    newStory = newStory.replace(':insertz:', Zitem);
    newStory = newStory.replace(':insertx:', Xitem);

    if(customName.value !== ""){
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if(document.getElementById("uk").checked){
        newStory = newStory.replace('94 fahrenheit', "32 centigrade");
        newStory = newStory.replace('300 pounds', "21 stone");
        
    }
    
    story.style.visibility = "visible";
    story.textContent = newStory;
}


