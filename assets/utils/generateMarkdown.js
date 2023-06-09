// Function for generating the license badge url
function renderLicenseBadge(license) {
  const badgeEndpoint = `https://img.shields.io/badge/license-${license}-`
  
  let color = '';

  if (license === 'MIT') {
    color = 'green'
  } else if (license === 'GPLv3') {
    color = 'orange';
  } else if (license === 'Apache') {
    color = 'yellowgreen';
  } else if (license === 'AGPLv3') {
    color = 'orange';
  } else {
    color = 'blue';
  }

  const licenseBadge = badgeEndpoint + color;

  return licenseBadge;
}

// Function for generating the link to the full license selected
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'GPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (license === 'Apache') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'AGPLv3') {
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/';
  } else {
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  }

  return licenseLink;
}

// Function to render the license section that will be injected into the readme markdown
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  const licenseSection = `
  This project is licensed under the terms of
  of the ${license} license.\n
  Full ${license} license here: ${licenseLink}
  `;

  return licenseSection;
}

// Function to generate the markdown for the readme
// Calls the licenseBadge and licenseSection functions here
// and places the badge up top, and the licenseSection into the
// actual section on the readme for the license
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ![](${licenseBadge})\n

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseSection}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  My GitHub URL here: <strong>https://github.com/${data.username}</strong>

  If you have any further questions about the project, I can be contacted through my <strong>email address: ${data.email}</strong>
`;
}

// Exporting function to generate the markdown
// So that it can be ran after the user is prompted for info
// on the index.js file
module.exports = generateMarkdown;
