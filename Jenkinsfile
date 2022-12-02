pipeline {
  agent any
  tools {
    "org.jenkinsci.plugins.docker.commons.tools.DockerTool" "latest"
  }
  stages {
    stage("ALL") {
      steps {
        dir("${WORKSPACE}") {
          git branch: "${BRANCH}", url: "https://github.com/unclehungatvietcetera/test"
          sh "docker build -t ttest -f Dockerfile ."
          sh "docker tag ttest localhost:5000/ttest:latest"
          sh "docker push localhost:5000/ttest:latest"
          sh "docker image rm localhost:5000/ttest:latest"
          sh "docker tag ttest localhost:5000/ttest:${GIT_COMMIT}"
          sh "docker push localhost:5000/ttest:${GIT_COMMIT}"
          sh "docker image rm localhost:5000/ttest:${GIT_COMMIT}"
        }
      }
    }
  }
}
