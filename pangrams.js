document.getElementById("sentenceSubmit").onclick = function(e){
    var sentence = document.getElementById("theSentence").value.toLowerCase();
    var validationOutput = getValidation(sentence.split(''));
    var outputLocation = document.getElementById("missingLetterString");
    var winningMessage = document.getElementById("message");
    outputLocation.innerHTML = '"'+validationOutput+'"';
    if(validationOutput.length == 0){
        winningMessage.innerHTML = "(This sentence contains every letter)";
    }else{
        winningMessage.innerHTML = "";
    }
}

function getValidation(data){
    var nonexisitingLeters = {
        a:{ unfound: true, literal: 'a'},
        b:{ unfound: true, literal: 'b' },
        c:{ unfound: true, literal: 'c' },
        d:{ unfound: true, literal: 'd' },
        e:{ unfound: true, literal: 'e' },
        f:{ unfound: true, literal: 'f' },
        g:{ unfound: true, literal: 'g' },
        h:{ unfound: true, literal: 'h' },
        i:{ unfound: true, literal: 'i' },
        j:{ unfound: true, literal: 'j' },
        k:{ unfound: true, literal: 'k' },
        l:{ unfound: true, literal: 'l' },
        m:{ unfound: true, literal: 'm' },
        n:{ unfound: true, literal: 'n' },
        o:{ unfound: true, literal: 'o' },
        p:{ unfound: true, literal: 'p' },
        q:{ unfound: true, literal: 'q' },
        r:{ unfound: true, literal: 'r' },
        s:{ unfound: true, literal: 's' },
        t:{ unfound: true, literal: 't' },
        u:{ unfound: true, literal: 'u' },
        v:{ unfound: true, literal: 'v' },
        w:{ unfound: true, literal: 'w' },
        x:{ unfound: true, literal: 'x' },
        y:{ unfound: true, literal: 'y' },
        z:{ unfound: true, literal: 'z' }
    };
    
    var missingLettersObj = updateLetterExistance(nonexisitingLeters, data);
    
    var missingList = letterObjToArray(missingLettersObj);
    
    return missingList.toString();
    
    
};

function letterObjToArray(letterObj){
    var missingLetters = [];
    for(var letter in letterObj){
        if(letterObj[letter].unfound){
            missingLetters.push(letter);
        }
    }
    return missingLetters;
};

function updateLetterExistance(allLetters, inputArray){
    if(inputArray.length == 0){
        return allLetters;
    }else{
        var current = inputArray.pop();
        if(allLetters[current] && allLetters[current].unfound){
            allLetters[current].unfound = !allLetters[current].unfound;
            return updateLetterExistance(allLetters, inputArray);
        }else{
            return updateLetterExistance(allLetters, inputArray);
        }
    }
};