# place this file in React project root directory
PROJECT_ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
commandType=${1:-null}
componentName="${2:-defaultComponentName}"
targetPath="${3:-.}"
targetPath="${targetPath%/}" # https://stackoverflow.com/questions/1848415/remove-slash-from-the-end-of-a-variable
srcPath="./src"
boilerplateDirectory="./boilerplate"

# Functions
function generateComponent() {
    componentName=${1:-}
    targetPath=${2:-}

    # validation
    componentsDirectory="./src/components"
    if [ ! -d ${componentsDirectory} ]; then
        mkdir ${componentsDirectory}
    fi

    # check naming collision
    if [ -d "${componentsDirectory}/${targetPath}/${componentName}" ]; then
        echo ERROR: component already exists at "$targetPath/$componentName"
        return
    else
        createComponentDirectory="${componentsDirectory}/${targetPath}/${componentName}"
        mkdir "${createComponentDirectory}"
        cp "${boilerplateDirectory}/component.js" "${createComponentDirectory}/${componentName}.js"
        touch "${createComponentDirectory}/${componentName}.scss"
    fi
}

# Main

if [ "${commandType}" = "g" ]; then
    generateComponent ${componentName} ${targetPath}
fi