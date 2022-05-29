pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "docker build --target build -t ava/build:latest ."
            }
        }
        stage("Test") {
            steps {
                sh "docker build --target test -t ava/test:latest ."
                sh "docker run test"
            }
        }

        stage("Publish") {
            agent {
                docker {
                    image "build:latest"
                    args "-u root"
                }
            }
            steps {
                sh "$JENKINS_HOME/.env"
                sh 'echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> ~/.npmrc'
                sh 'npm publish'
            }
        }
    }
}
