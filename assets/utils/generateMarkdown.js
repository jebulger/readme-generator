// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `This project is licensed under the terms of
  of the ${license} license.\n
  Full ${license} license here: ${licenseLink}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${licenseBadge}
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
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  My GitHub URL here: <strong>https://github.com/${data.username}</strong>

  If you have any further questions about the project, I can be contacted through my <strong>email address: ${data.email}</strong>
`;
}

module.exports = generateMarkdown;
