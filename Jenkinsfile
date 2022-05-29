pipeline {
    agent any
    stages {
        stage("test") {
            steps {
                sh "docker build --target build -t ava/build"
            }
        }
        stage("Build") {
            steps {
                sh "docker build --target build /var/jenkins_home"
            }
        }

        stage("Test") {
            steps {
                sh "docker build --target test /var/jenkins_home"
            }
        }

        stage("Deploy") {
            steps {
            }
        }

        stage("Publish") {
            agent {
                docker {
                    image "build:lastest"
                }
            }
            steps {
            }
        }
    }
}
