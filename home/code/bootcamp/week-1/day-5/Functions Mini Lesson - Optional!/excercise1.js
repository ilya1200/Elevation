const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}



function normalize(story, specialChars) {
    const storyLowerCase = story.toLowerCase();
    const storyNoramliezed = removeSpecialChars(storyLowerCase, specialChars);
    return storyNoramliezed;
}

function removeSpecialChars(str, specialChars) {
    let dirtyStr = str;
    for (let char of specialChars) {
        dirtyStr = dirtyStr.split(char).join("");
    }

    const cleanStr = dirtyStr;
    return cleanStr;
}

function breakToWords(str) {
    return str.split(" ");
}

function countWords(story, wordCounts) {
    if (!story) {
        return "Sorry ,no story";
    }

    const words = breakToWords(story);

    for (let word of words) {
        if(wordCounts[word] === undefined){
            wordCounts[word] = 1;
        }else{
            wordCounts[word]++;
        }
    }

    console.log(words);
    console.log(wordCounts);
}

const storyNoramliezed = normalize(story, specialChars);
countWords(storyNoramliezed, wordCounts)