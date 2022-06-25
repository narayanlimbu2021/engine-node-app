pipeline{
    agent { dockerfile true }
    stages{
        stage("init"){
            steps{
                echo 'first step'
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

