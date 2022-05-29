pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                sh "docker build --target build -t ava/build ."
            }
        }
        stage("Test") {
            steps {
                sh "docker build --target test ava/test ."
                sh "docker run test"
            }
        }

        stage("Publish") {
            agent {
                docker {
                    image "build:lastest"
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