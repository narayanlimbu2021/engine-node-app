def gv

pipeline{
    agent any
    stages{
        stage("init"){
            steps{
                script{
                   echo 'Installation'
                }
            }
        }
        stage("build"){
            steps{
                script{
                   echo "This is building stage"
                }
            }
        }

        stage("deploy"){
            steps {
                script{
                    echo "This is deploying stage"
                }
               
            }
        }
    }
}

