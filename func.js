console.log("func test");

let answered = 8;
let anim = document.body;
let pop = document.getElementById('popup');
let title = document.getElementById('invincible');

function checker() { 
    anim.classList.remove("corr", "wro");   
    let item = localStorage.getItem("wordpicker");

    let pre = document.getElementById('ans').value;
    let answer = pre.toUpperCase();

    if (answer === item) {
        answered += 1;
        localStorage.setItem("numbers", answered);
        nextQ();
        console.log("success");

        anim.classList.add("corr");

        images();

        pop.classList.remove("close")
        pop.classList.add("open")
        title.innerText = `${item}`
        infodump();
    }

    else {
        console.log("failed");
        anim.classList.add("wro");
    }
        setTimeout(function(){
        anim.classList.remove("corr", "wro");
    }, 1000);
}

document.addEventListener("keydown", function(enter) {
    if (enter.repeat) {
        enter.preventDefault;
    }
    if (enter.key === "Enter") {
        checker();
    }
})

let y = 1;
function images() {
    let x = 0;
    if (answered <= 8) {
        for (x = 1; x <= 4; x++) {
            console.log("showing " + x + "image");
            console.log("showing " + y + "image");
            
            let imager = document.getElementById(`img${x}`);
            imager.src = `pictures/${y}.jpg`;
            y++
        }
    }

    else {
        document.getElementById('pic').innerHTML = `
        <div class="pic1" id="final">
        <img src="" id="img1">
        </div>
        `
        document.getElementById('img1').src = "pictures/qr.jpg";

        let fin = document.getElementById('final');
        fin.style.borderRadius = "3vw";
        fin.style.width = "35vh";
        fin.style.height = "35vh";
        fin.style.margin = "auto";

        document.querySelector('.header').innerHTML = `
        <h1>Group 1</h1>
        `

        document.getElementById('ans').remove();
    }
} images()

function dull() {
    pop.classList.remove('open');
    pop.classList.add('close');
}

let descriptions = [
    "A state is a permanent sovereign political entity consisting of a defined population, a fixed territory, an organized government, and the supreme authority to rule itself.",
    "It is the ultimate legal and political framework of human society. Unlike nations (which are cultural groups), a state requires legal, physical, and institutional permanence.",
    "The Republic of the Philippines is a fully realized state. Conversely, the Bangsamoro people possess a distinct cultural identity and population, but they do not form a separate state; they exist as an autonomous region within the sovereign territory and legal framework of the Philippine state.",
    //1
    "The State is the abstract, permanent political institution that holds sovereign power; the Government is the concrete, temporary apparatus or group of individuals that manages and exercises that power.",
    "Governments change frequently through elections or transitions, but the State remains legally unbroken. The government is merely the driver; the state is the vehicle.",
    "When the country transitioned from the Duterte Administration to the Marcos Jr. Administration, the Government changed. However, the Philippine State—including its 1987 Constitution, national boundaries, permanent civil service, and international treaties—remained completely continuous and unchanged.",
    //2
    "The constitutional declaration establishing that the Philippines is a democratic and republican state where sovereignty resides in the people.",
    '"Republicanism" means citizens do not rule directly; instead, they delegate their sovereign power to elected representatives. The people are the ultimate bosses, and the government only rules by their consent.',
    "When millions of Filipinos queue at polling precincts to shade ballots during a national election, they are performing a republican act: temporarily transferring their inherent sovereign authority to the leaders they select to run the country.",
    //3
    "The constitutional mandate that public office is a public trust, requiring all government officials to be answerable to the citizens they serve at all times.",
    "In a democracy, public officials do not possess inherent power; they hold it provisionally as custodians. If they abuse it, the citizens possess both the legal and moral right to strip them of that authority.",
    "The constitutional power of the Ombudsman to investigate and prosecute corrupt officials, or the legal process of impeachment used by the House of Representatives against a sitting high-ranking official, represents democratic accountability in action.",
    //4
    "The operational mechanisms of the state, divided into distinct branches (Legislative, Executive, Judicial) to maintain order, protect rights, and promote public welfare.",
    "To prevent tyranny, power must be fragmented. No single institution can make laws, enforce them, and judge them simultaneously; a system of checks and balances keeps them aligned.",
    "If Congress passes a tax bill that disproportionately violates citizens' rights, the President can use their executive veto. If the President signs it into law anyway, the Supreme Court steps in to declare it unconstitutional.",
    //5
    "Population is the permanent human community bound to a state; Territory is the legally defined physical space (terrestrial, aerial, and maritime) over which the state exercises exclusive jurisdiction.",
    "A state cannot exist in the abstract ether; it requires physical boundaries on a map and human beings living within those boundaries to govern.",
    "The physical footprint of the Philippine state consists of its population of over 117 million people interacting within a defined geographic territory that spans over 7,600 islands, its internal waters, and its 12-nautical-mile territorial sea.",
    //6
    "Government is the institutional agency through which the will of the state is formulated and expressed; Sovereignty is the supreme, absolute power of the state to command obedience internally and remain free from external control.",
    "Government is the tool; sovereignty is the power that gives the tool its teeth. Without sovereignty, a government's laws are meaningless suggestions.",
    "When the Philippine National Police (PNP) enforces the Revised Penal Code within Manila or Cebu, the state is exercising internal sovereignty. When the Department of Foreign Affairs firmly rejects instructions from a foreign superpower regarding how to manage domestic defense, it is asserting its external sovereignty.",
    //7
    "The empirical, demographic, and geographic metrics that satisfy the physical requirements of Philippine statehood.",
    "This grounds the political theory of a state into concrete, real-world facts and figures unique to the Philippine archipelago.",
    "According to data from the Philippine Statistics Authority (PSA), the country's population is heavily concentrated in regions like CALABARZON and the National Capital Region (NCR), all living within a total sovereign land area of approximately 300,000 square kilometers.",
    //8
    "The structural profile of the Philippine government as a unitary, presidential system, combined with its legal recognition as an independent actor in global politics.",
    "It highlights how the Philippines projects its sovereignty outward, interacting with other states as a legal equal under international law.",
    "The Philippines proved its standing as a sovereign equal on the global stage by being a founding member of both the United Nations (UN) and the Association of Southeast Asian Nations (ASEAN), autonomously signing international pacts without needing permission from any other nation.",
    //9
];

let texts = document.querySelectorAll('h3');
let z = 0;

function infodump() {
    if (z == 26) {

    }

    else {
        texts.forEach(element => {
        element.innerText = descriptions[z];
        z++;
    });
    }
}