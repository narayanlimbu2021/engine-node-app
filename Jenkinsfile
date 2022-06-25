pipeline{
    agent any
    stages{
        stage("init"){
            steps{
                docker{
                 docker build .
                }
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

