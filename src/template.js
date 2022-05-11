function renderManager(manager) {
  return `
  <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
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
    return `<div class="card employee-card">
      <div class="card-header">
          <h2 class="card-title">${engineer.getName()}</h2>
          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
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
  return markup.join(",");
}
function renderInterns(interns) {
  const markup = interns.map((intern) => {
    return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
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
  return markup.join(",");
}
function generateTeam(teamMembers) {
  return `
        ${renderManager(teamMembers.manager)}
        ${renderEngineers(teamMembers.engineers)}
        ${renderInterns(teamMembers.interns)}
    `;
}

function render (teamMembers) {
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
</head>
<body>
    <nav class="bg-primary text-center py-5">
        
          <h1>Welcome To My Team</h1>
      </nav>
    
      <div class="container my-5">
        <div class="row">
          <div class="col">
          ${generateTeam(teamMembers)}
          </div>
          <div class="col">

          </div>
          <div class="col">

          </div>
        </div>
      </div>


</body>
</html>
  `
}

module.exports = render;