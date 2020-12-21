node {
    try {
        def project = 'registry.infohob.com'
        def appName = 'infohob-frontend'
        def serviceName = 'infohob-frontend-v1'
        def feSvcName = "${serviceName}"
        def tagNumber = 1000 + (env.BUILD_NUMBER as int)
        def imageTag = "${project}/${appName}:${env.BRANCH_NAME}.${tagNumber}"

        checkout scm

        stage('Check tools') {
            sh("docker --version")
        }

        stage('Build image') {
            sh("docker build -t ${imageTag} .")
        }

        stage('Run tests') {
            sh("npm install")
        }

        stage('Push image to registry') {
            sh("docker push ${imageTag}")
        }

        stage("Deploy Application") {
            switch (env.BRANCH_NAME) {
                // Roll out to staging deployment
                case "staging":
                    // deploy project to staging server
                    break

                // Roll out to production
                case "main":
                    sh("sed -i.bak 's#https://registry.infohob.com/infohob-frontend#${imageTag}#' ./kubernetes/development/*.yaml")
                    sh("kubectl apply -f kubernetes/services/ --validate=false")
                    sh("kubectl apply -f kubernetes/development/ --validate=false")
                    break
                // Roll out a feature environment
                default:
                    echo "This is a feature branch!. We currently do not support deployment for feature branch thanks"
            }
        }
    } catch (e) {
        // If there was an exception thrown, the build failed
        currentBuild.result = "FAILED"
        throw e
    } finally {
        // Success or failure, always send notifications
    }
}