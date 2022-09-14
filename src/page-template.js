// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class = "col-sm-3 mx-5 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0  bg-primary rounded-top justify-content-center">
                <div class="card-title text-white ps-3 mt-2">
                  <h2>${manager.getName()}</h2>
                    <h3> Manager
                     <i class="fas fa-mug-hot mr-2"></i> ${manager.getRole()}
                    </h3>
                </div>
            </div>
            <div class="bg-muted">
                <ul class="groups">
                    <li class="items">
                        ID: ${manager.getId()}
                    </li>
                    <li class="items">
                        Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
                    </li>
                    <li class="items">
                        Office number: ${manager.getOfficeNumber()}
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class = "col-sm-3 mx-5 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0  bg-primary rounded-top justify-content-center">
               <div class="card-title text-white ps-3 mt-2">
                 <h2>${engineer.getName()}</h2>
                 <h3>
                    <i class="fas fa-glasses mr-2"></i>${engineer.getRole()}
                 </h3>
                </div>
            </div>
            <div class="bg-muted">
              <ul class="groups">
                 <li class="items">ID: ${engineer.getId()}</li>
                    <li class="items">
                        Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
                    </li>
                    <li class="items">
                        GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class = "col-sm-3 mx-5 card px-0 shadow" style="width: 22rem;">
            <div class="card-body p-0  bg-primary rounded-top justify-content-center">
                <div class="card-title text-white ps-3 mt-2">
                    <h2>${intern.getName()}</h2>
                    <h3>
                         <i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}
                    </h3>
                </div>
            </div>
            <div class="bg-muted">
                <ul class="groups>
                    <li class="items" >ID: ${intern.getId()}</li>
                    <li class="items" >${intern.getEmail()}</a></li>
                    <li class="items" >School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            ${generateTeam(team)}
        </main>
    </body>
</html>
    `;
};
