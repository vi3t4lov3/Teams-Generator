function renderManager(manager) {
  return `
  <div class="card employee-card m-2" style="width: 300px">
      <div class="card-header bg-danger">
          <h2 class="card-title text-center">${manager.getName()}</h2>
          <h3 class="card-title text-center"><i class="bi bi-person"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${manager.getOffice()}</li>
          </ul>
      </div>
  </div>    
  `;
}
function renderEngineers(engineers) {
  const markup = engineers.map((engineer) => {
    return `
    <div class="card employee-card m-2" style="width: 300px">
      <div class="card-header bg-success">
          <h2 class="card-title text-center">${engineer.getName()}</h2>
          <h3 class="card-title text-center"><i class="bi bi-person-check"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${engineer.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
          </ul>
      </div>
  </div>
      `;
  });
  return markup.join("");
}
function renderInterns(interns) {
  const markup = interns.map((intern) => {
    return `
    <div class="card employee-card m-2" style="width: 300px">
      <div class="card-header bg-warning">
          <h2 class="card-title text-center">${intern.getName()}</h2>
          <h3 class="card-title text-center"><i class="bi bi-person-plus"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
          <ul class="list-group">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
    </div>`;
  });
  return markup.join("");
}
function render ({manager,engineers,interns} ) {
  return `
  
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Team</title>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
    crossorigin="anonymous"
    />
    <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
    />
    <link rel="stylesheet" href="./styles.css"/>
</head>
<body>
    <nav class="bg-primary text-center py-5">
        <h1>Welcome To My Team</h1>
    </nav>
    <div class="custom">

        <div class="column-container">
            ${renderManager(manager)} 
        </div>

        <div class="column-container ">
            ${renderEngineers(engineers)}
        </div>
        
        <div class="column-container">
            ${renderInterns(interns)}
        </div>
        
    </div>
</body>
</html>
  `
}

module.exports = render;