pipeline {
    agent any
    parameters {
        string(name: "VERSION_MAJOR", defaultValue: "1", description: "")
        string(name: "Build number minor", defaultValue: "1")
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
                sh "echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc"
                sh "npm version ${Bu}"
                sh "npm publish"
            }
        }
    }
}
