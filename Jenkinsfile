pipeline {
    agent any
    parameters {
        booleanParam(name: "PUBLISH", defaultValue: true, description: "Check to publish build to npm")
        string(name: "VERSION_MAJOR", defaultValue: "1", description: "Major version of build to be published")
        string(name: "VERSION_MINOR", defaultValue: "0", description: "Minor version of build to be published")
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
            when {
                enviroment name: PUBLISH, value: true
            }
            agent {
                docker {
                    image "ava/build:latest"
                    args "-u root"
                }
            }
            steps {
                sh "git config user.email thomas.ziobrowski@gmail.com"
                sh "git config user.name Ziobrowskyy"
                load "$JENKINS_HOME/.env"
                sh "echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' >> ~/.npmrc"
                sh "npm version ${params.VERSION_MAJOR}.${params.VERSION_MINOR}.${BUILD_NUMBER}"
                sh "npm publish --access public"
            }
        }
    }
}
