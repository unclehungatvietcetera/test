pipeline {
  agent any
  tools {
    "org.jenkinsci.plugins.docker.commons.tools.DockerTool" "latest"
  }
  stages {
    stage("PULL") {
      steps {
        dir("/var/jenkins_home/workspace/test") {
            git branch: "${params.BRANCH}", url: "https://github.com/unclehungatvietcetera/test"
            echo "${params.BRANCH}"
        }
      }
    }
  }
}
