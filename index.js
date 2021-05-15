 var words = ["monitor", "mouse", "pix", "caiet", "tastatura", "wellcode", "programator", "microfon", "camera", "stand", "minecraft", "csgo", "ecran"];
                var random =  Math.floor(Math.random() * words.length) + 1, trys = 0;
                var word = new String(words[random]);
                const map = new Map();
                const frq = new Array(word.length).fill(0);
                var result = new Array();
                var len = word.length, count = 0;
                frq[0] = 1;


               for(var i = 0; i < word.length; ++i) {
                    ++map[word[i]];
                    result[i] = '_';

               }
               result[0] = word[0];
               document.querySelector("#randomWord").innerHTML = result.toString();

               function verifyPos(letter) {                     
                      for(var i = 0; i < word.length; ++i) {                           
                           if(word.charAt(i) == letter && frq[i] != 1) {
                                 ++count;
                                 frq[i] = 1;
                                 result[i] = letter;
                           }
                        }
               }
               
               var useless = new String();
               var letter = new String();
               function checkHang(letter) {    
                      this.letter = letter;

                      if(map[letter] != null) {
                            verifyPos(letter);
                                

                            document.querySelector("#try").innerHTML = "HANG &#128522;: " + trys + " / 10";
                            document.querySelector("#randomWord").innerHTML = result.toString();
                                                                                         
                            document.getElementById("check").style.color = "green";
                            document.querySelector("#check").innerHTML = "the letter was accepted";
                        } else {            
                            useless = useless + letter + " ";
                            ++trys;  
                                    
                            document.querySelector("#try").innerHTML = "HANG &#129301;: " + trys + " / 10";
                            document.querySelector("#last").innerHTML = "Useless letters: " + useless;
                            document.getElementById("check").style.color = "red";
                            document.querySelector("#check").innerHTML = "the letter was not accepted";
                        }

                        if(count == word.length - 1 && trys < 10) {    
                            document.querySelector("#try").innerHTML = "WINNER";
                            document.querySelector("#randomWord").innerHTML = "&#127867;Congratulations my friend , the correct word is: "  + word;
                            document.querySelector("#last").innerHTML = "Press the reset button";
                        } else if(count != word.length - 1 && trys >= 10) {
                            document.querySelector("#try").innerHTML = "LOSER";
                            document.querySelector("#randomWord").innerHTML = "&#129319;Sorry my friend you losed , the correct word is: "  + word;
                            document.querySelector("#last").innerHTML = "Press the reset button";
                            
                        }

               }

            function resetGame() {
                location.reload();
            }
               
