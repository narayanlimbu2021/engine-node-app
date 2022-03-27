def gv

pipeline{
    agent any
    parameters{
        choice(name:'VERSION', choices:['1.1.0', '1.2.0','1.3.0'], description:'')
        booleanParam(name:'executeTests', defailtValue: true, description: '')
    }
    stages{
        stage("init"){
            steps{
                script{
                   gv=load "script.groovy"
                }
            }
        }
        stage("build"){
            steps{
                script{
                   gv.defBuild()
                }
            }
        }

        stage("deploy"){
            steps {
                script{
                    gv.defDeploy()

                }
               
            }
        }
    }
}

