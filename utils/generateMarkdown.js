// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  </br>
  
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  </br>

  ## Description

  ${description}

  </br>

  ## Installation

  To install this application, please follow the steps below:
  ${'```'}
  ${install}
  ${'```'}

  </br>

  ## Usage

  ${usage}

  </br>

  ## License

  Licensed under the ${license} License. See LICENSE for the full details. 

  </br>

  ## Contributing

  Please take a look at our contributing guidelines below if you're interested in helping!

  ${contribute}

  </br>

  ## Tests

  ${testing}

  ## Questions

  If you have any questions regarding this application, feel free to send me an email at [${email}](mailto:${email}).

  </br>

  Created by [${username}](https://github.com/${username}).
  `;
}

module.exports = generateMarkdown;
