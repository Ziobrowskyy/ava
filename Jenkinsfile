pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                echo "Stage: Build"
                sh "docker build --target build /var/jenkins_home"
            }
        }

        stage("Test") {
            steps {
                echo "Stage: Test"
                sh "docker build --target test /var/jenkins_home"
            }
        }

        stage("Deploy") {
            steps {
                echo "Stage: Deploy"
            }
        }

        stage("Publish") {
            steps {
                echo "Stage: Publish"
            }
        }
    }
}
