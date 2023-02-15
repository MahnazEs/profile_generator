

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question(`What's an activity you like doing?  `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (music) => {
      rl.question(`Which meal is your favourite? (eg: dinner, brunch, etc.) `, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (thing) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (words) => {
              console.log(`Thank you for your answering: ${name}. According your answers, your favourite activity is ${activity} and you like to listen to ${music} while doing ${activity}.
              It is interesting to know that your favourite meal is ${meal} with ${thing} that you like to eat for that. Also your favourite sport is ${sport}. This is ${words} your words that we are happy to hear 
              that. Thank you for your time ${name}. Have a good time.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});





