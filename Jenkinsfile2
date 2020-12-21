node {
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'main'){
        sh 'docker build -t infohob-frontend --no-cache .'
        sh 'docker tag infohob-frontend localhost:8080/infohob-frontend'
        sh 'docker push localhost:8080/infohob-frontend'
        sh 'docker rmi -f infohob-frontend localhost:8080/infohob-frontend'
      }
    }
    stage ('Deploy to Kubernetes') {
        withCredentials([kubeconfigFile(credentialsId: 'kube-config', variable: 'KUBECONFIG')]) {
            //sh 'kubectl create secret docker-registry regcred --docker-server=https://registry.blusalt.io/v2/_catalog --docker-username=blusalt --docker-password=ZZmWxWyNrf42MdLe --docker-email=gettosin4me@gmail.com'
            sh "helm upgrade --install blusalt-sms-gateway ./helm --set image.repository=${env.REGISTRY_HOST}/blusalt-sms-gateway --set replicaCount=${env.REPLICAS}"
        }
    }
  }
  catch (err) {
    throw err
  }
}