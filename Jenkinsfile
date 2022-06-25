pipeline{
    agent any
    stages{
        stage("init"){
            steps{
                echo "This is docker build stage stage"
                docker build .
                echo "docker images is successfully build"
                
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

