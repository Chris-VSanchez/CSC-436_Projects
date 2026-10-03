// Leader Information and Cards
const leaderSection = document.querySelector("#leaderGrid");

const leaderInformation = 
[
    { 
        id: 1, 
        role: "President", 
        leaderName: "Chris Sanchez", 
        primaryContact: true, 
        email: "christopher.vasquezsanchez@csi.cuny.edu"
    }, 

    { 
        id: 2, 
        role: "Vice President", 
        leaderName: "Kateryna Taranenko", 
        primaryContact: true, 
        email: "kateryna.taranenko29@stu-mail.csi.cuny.edu" 
    }, 
    
    { 
        id: 3, 
        role: "Treasurer", 
        leaderName: "Giovanni Gil", 
        primaryContact: false, 
        email: "giovanni.gil33@stu-mail.csi.cuny.edu"
    }, 

    { 
        id: 4, 
        role: "Secretary", 
        leaderName: "Mellanie Alvarenga", 
        primaryContact: false, 
        email: "mellanie.alvarenga36@stu-mail.csi.cuny.edu" 
    }
];

for( let leader of leaderInformation)
{
    const leaderCard = document.createElement("div");
    leaderCard.className = "leader-card";

    leaderCard.innerHTML = 
    `
        <div class = "leader-background-container">
            <img src = "background.svg" class = "leader-background">
        </div>
                    
        <button data-id = "${leader.id}" class = "leader-button">Contact Info</button>

        <p>${leader.role}</p>
        <h2>${leader.leaderName}</h2>
    `;

    leaderSection.append(leaderCard);
}

// Contact Information Event Listener
leaderSection.addEventListener("click", (e) => 
{
    const btn = e.target.closest("[data-id]");

// Show Contact Information
    if( btn) 
    {
        const leaderId = Number(btn.dataset.id);

        const leader = leaderInformation.find(leader => leader.id === leaderId);

        if( !leader) 
            return;

        const leaderCard = btn.closest(".leader-card");

        // Hide Contact Info button
        btn.style.display = "none";

        // Add contact information to card
        leaderCard.insertAdjacentHTML(
            "beforeend",
            `
            <div class = "contact-info">
                ${leader.primaryContact ? "<h4>Primary Contact</h4>" : ""}
                <p>Email: ${leader.email}</p>

                <button class = "hide-info">Hide Info</button>
            </div>
            `);

        return;
    }


// Hide Information
    const hideBtn = e.target.closest(".hide-info");

    if( hideBtn) 
    {
        const leaderCard = hideBtn.closest(".leader-card");

        // Remove contact information
        leaderCard.querySelector(".contact-info").remove();

        // Show Contact Info button
        leaderCard.querySelector(".leader-button").style.display = "block";
    }
});