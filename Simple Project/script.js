function startChat() {
    alert("🧚‍♀️ Hello cutie! I'm your Magic Doll... Let's have a little fun chat!");
  
    let name = prompt("What's your name?");
    let mood = prompt("How are you feeling today? (happy/sad/excited)");
    let favFood = prompt("What's your favorite food?");
    let dream = prompt("What's one dream you want to fulfill?");
  
    let msg = `💖 Hello ${name}!\n\n`;
    msg += `The Magic Doll is so happy to meet you! 🧸\n\n`;
  
    if (mood.toLowerCase() === "happy") {
      msg += "😊 You’re glowing with happiness! It’s beautiful to see you smile.\n\n";
    } else if (mood.toLowerCase() === "sad") {
      msg += "😔 Aww, the Doll feels your sadness. Sending you the warmest hugs! Everything will be okay. 💗\n\n";
    } else if (mood.toLowerCase() === "excited") {
      msg += "🎉 Wow! Your excitement is sparkling like magic dust! Keep that energy going!\n\n";
    } else {
      msg += "🌈 Hmm… your mood is unique and full of mystery — just like a rainbow unicorn! 🦄\n\n";
    }
  
    msg += `🍲 Your favorite food is ${favFood}? Yum yum! The Doll is getting hungry just thinking about it! 😋\n\n`;
  
    msg += `🌟 Your dream to *"${dream}"* is really inspiring.\n`;
    msg += `The Doll believes in you — go chase your dream, and make it come true! 💫✨\n\n`;
  
    msg += "Thanks for chatting with me! Come back anytime. 💕";
  
    document.getElementById("result").textContent = msg;
  }