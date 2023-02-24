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

  ${data.description}

  </br>

  ## Installation

  To install this application, please follow the steps below:
  ${'```'}
  ${data.install}
  ${'```'}

  </br>

  ## Usage

  ${data.usage}

  </br>

  ## License

  Licensed under the ${data.license} License. See LICENSE for the full details. 

  </br>

  ## Contributing

  Please take a look at our contributing guidelines below if you're interested in helping!

  ${data.contribute}

  </br>

  ## Tests

  ${data.testing}

  ## Questions

  If you have any questions regarding this application, feel free to send me an email at [${data.email}](mailto:${data.email}).

  </br>

  Created by [${data.username}](https://github.com/${data.username}).
  `;
}

module.exports = generateMarkdown;
