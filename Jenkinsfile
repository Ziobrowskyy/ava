pipeline {
    agent any
    parameters {
        string(name: "VERSION_MAJOR", defaultValue: "1", description: "Major version of build to be published")
        string(name: "VERSION_MINOR", defaultValue: "1", description: "Minor version of build to be published")
    }
    stages {
        stage("Build") {
            steps {
                sh "docker build --target build -t ava/build:latest ."
            }
        }
        stage("Test") {
            steps {
                sh "docker build --no-cache --target test -t ava/test:latest ."
                sh "docker run ava/test:latest"
            }
        }

        stage("Publish") {
            agent {
                docker {
                    image "ava/build:latest"
                    args "-u root"
                }
            }
            steps {
                load "$JENKINS_HOME/.env"
                sh "echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' >> ~/.npmrc"
                sh "npm version ${params.VERSION_MAJOR}.${params.VERSION_MINOR}.${BUILD_NUMBER}"
                sh "npm publish"
            }
        }
    }
}
