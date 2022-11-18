pipeline {
  agent any
  tools {
    "org.jenkinsci.plugins.docker.commons.tools.DockerTool" "latest"
  }
  parameters {
    string(name: "BRANCH", defaultValue: "main")
  }
  stages {
    stage("PULL") {
      steps {
        dir("/var/jenkins_home/workspace/test") {
          git branch: "${params.BRANCH}", url: "https://github.com/unclehungatvietcetera/test"
        }
      }
    }
    stage("BUILD") {
      steps {
        dir("/var/jenkins_home/workspace/test") {
          sh "docker build -t ttest -f Dockerfile ."
        }
      }
    }
  }
}
