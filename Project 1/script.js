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
                    
        <button class = "leader-button">Contact Info</button>

        <p>${leader.role}</p>
        <h2>${leader.leaderName}</h2>
    `;

    leaderSection.append(leaderCard);
}