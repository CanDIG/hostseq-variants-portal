# HostSeq Variants Portal

### Table of Contents
- [Installation](#installation)
- [Contributing to this project](#contributing-to-this-project)
- [GitHub workflow](#github-workflow)

## Installation

Before installing the Dashboard, make sure you have [Node.js](https://nodejs.org/en/) version v10.13.0 or above installed on your environment.

Clone this repository and start the installation using the following commands:
```bash
git clone git@github.com:CanDIG/hostseq-variants-portal.git
cd hostseq-variants-portal
npm install
```
That command will install all the dependencies used on the application.

Once the installation is completed, you may start the dashboard by running:
```bash
REACT_APP_CANDIG_SERVER_DASHBOARD_BASE_URL='http://your_candig_server_path.ca' npm start
```
## Deployment

```bash
export REACT_APP_CANDIG_SERVER_DASHBOARD_BASE_URL='http://your_candig_server_path.ca'
npm run build
npx http-server --proxy http://0.0.0.0:8080? ./build/
```

## Contributing to this project

If you encounter a bug, or have a problem of using the service, please contact us by opening an issue at [issues page](https://github.com/CanDIG/hostseq-variants-portal/issues)

### GitHub workflow

We mainly employ three different types of branches: feature branches, develop branch, and stable branch.

Feature branches are used to resolve a limited set of issues, and typically follows the naming convention of username/fix_one_particular_issue. When initiating a Pull Request, you should request it to be merged back into the develop branch. The commits in individual feature branches are usually squashed, and code review usually happens at this step.

Develop branch is used to host code that has passed all the tests, but may not yet be production-ready, As a developer, you are welcome to play with this branch to test some of the new functionalities.

If you would like to contribute code, please fork the package to your own git repository, then initiate a Pull Request to be merged into develop.

