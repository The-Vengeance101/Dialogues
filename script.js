document.getElementById('butt').addEventListener('click', function() {
    // Array of quotes
    const quotes = [
        "Kitne aadmi the (Sholay- Amjad Khan- 1975)",
        "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? (Deewar-Amitabh Bachchan- 1975)",
        "Kaun kambakht bardaasht karne ko peeta hai? Main toh peeta hoon ke bas saans le saku (Devdas- Dilip Kumar- 1955)",
        "Kutte, kameene, main tera khoon pee jaoonga (Yaddon Ki Baraat- Dharmendra- 1973)",
        "Ek baar jo maine commitment kar di, To Apne aap ki bhi nahi sunta (Wanted- Salman Khan- 2009)",
        "Prem naam hai mera, Prem Chopra (Bobby- Prem Chopra- 1973)",
        "Bade bade shehron mein aisi chhoti chhoti baatein hoti rehti hain (Dilwale Dulhaniya Le Jayenge- Shah Rukh Khan- 1995)",
        "Itni shiddat se maine tumhe paane ki koshish ki hai ... ki har zarre ne mujhe tumse milane ki saazish ki hai (Om Shanti Om- Shah Rukh Khan- 2007)",
        "Rishte mein to hum tumhare baap lagte hain, naam hai Shahenshah (Shahenshah- Amitabh Bachchan- 1988)",
        "Insan naam mein mazab dhoond leta hai (A Wednesday! Naseeruddin Shah- 2008)",
        "I can talk English, I can walk English, I can run English... because English is a very phunny language (Namak Halal- Amitabh Bachchan- 1982)",
        "Ye Hath Humko De De Thakur (Sholay- Amjad Khan- 1975)",
        "Naam Vijay Deenanath Chauhan, Baap Ka naam Deenanath Chauhan (Agneepath- 1990)",
        "Jinke ghar sheeshe ke hote hain, woh batti bujha ke kapde badalte hain (Souten- Prem Chopra- 1983)",
        "Pushpa, I hate tears... inhe ponch dalo (Amar Prem- Rajesh Khanna- 1971)",
        "Kabhi kabhi kuch jeetne ke liye kuch harna bhi padta hai, aur haar kar jeetnay wale ko baazigar kehte hain (Baazigar- Shah Rukh Khan- 1993)",
        "Ye dhai kilo ka hath jab kisi pe padta hai na, to aadmi uthta nahi uth jata hai (Damini- Sunny Deol- 1993)",
        "Marco, mein jeena chahti hoon (Guide- Waheeda Rehman- 1965)",
        "Ye police station hai tumhare baap ka ghar nahi (Zanjeer- Amitabh Bachchan- 1973)",
        "Koi pyaar kare toh tumse kare, tum jaise ho waise kare... Koi tumko badal kar pyaar kare toh woh pyaar nahin, sauda hai (Bobby- Rishi Kapoor- 1973)"
    ];

    // Select a random quote
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];

    // Display the quote
    document.getElementById('out').innerText = randomQuote;
});
