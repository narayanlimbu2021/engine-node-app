pipeline{
    agent any
    stages{
        stage("Docker Building"){
            steps{
               sh 'docker build -t test-build .'
            }
        }
        stage("build"){
            steps{
                echo "This is building stage"
            }
        }

        stage("deploy"){
            steps {
                echo "This is deploying stage"
            }
        }
    }
}

