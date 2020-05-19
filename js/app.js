let myQuestions = [
	{
		question: "1-What is the value of having AWS Cloud services accessible through an Application Programming Interface (API)?",
		answers: {
			a: 'Cloud resources can be managed programmatically\n',
			b: 'AWS infrastructure use will always be cost-optimized ',
			c: 'All application testing is managed by AWS.',
			d: 'Customer–owned, on–premises infrastructure becomes programmable.'
		},
		correctAnswer: 'a'
	},
	{
		question: "2-Which of the following is the responsibility of the AWS customer according to the Shared Security Model?",
		answers: {
			a: 'Managing AWS Identity and Access Management (IAM)',
			b: 'Securing edge locations',
			c: 'Monitoring physical device security',
			d: 'Implementing service organization Control (SOC) standards'
		},
		correctAnswer: 'a'
	},
	{
		question: "3-Where can a customer go to get more detail about Amazon Elastic Compute Cloud (Amazon EC2) billing activity that took place 3 month ago",
		answers: {
			a: 'Amazon EC2 dashboard',
			b: 'AWS Cost and Usage reports',
			c: 'AWS Trusted Advisor dashboard',
			d: 'AWS Cloud Trail logs stored in Amazon Simple Storage Service (Amazon S3)'
		},
		correctAnswer: 'b'
	},
	{
		question: "4-Who has control of the data in an AWS account?",
		answers: {
			a: 'AWS Support Team',
			b: 'AWS Account Owner',
			c: 'AWS Security Team',
			d: 'AWS Technical Account Manager (TAM)'
		},
		correctAnswer: 'b'
	},
	{
		question: "5-The main benefit of decoupling an application is to:",
		answers: {
			a: 'Create a tightly integrated application',
			b: 'Reduce inter-dependencies so failures do not impact other components',
			c: 'Enable data synchronization across the web application layer',
			d: 'Have the ability to execute automated bootstrapping actions'
		},
		correctAnswer: 'b'
	},
	{
		question: "6-Which of the following is a benefit of running an application across two Availability Zones?",
		answers: {
			a: 'Performance is improved over running in a single Availability Zone',
			b: 'It is more secure than running in a single Availability Zone',
			c: 'It significantly reduces the total cost of ownership versus running in a single Availability Zone',
			d: 'It increases the availability of an application compared to running in a single Availability Zone'
		},
		correctAnswer: 'd'
	},
	{
		question: "7-Which of the following security requirements are managed by AWS customers? Select 2 answers from the options given below.",
		answers: {
			a: 'Password Policies',
			b: 'User permissions',
			c: 'Physical security',
			d: 'Disk disposal',
			e: 'Hardware patching'
		},
		correctAnswer: 'a' // A e B são as respostas certas 
	},
	{
		question: "8-Systems applying the cloud architecture principle of elasticity will",
		answers: {
			a: 'Minimize storage requirements by reducing logging and auditing activities ',
			b: 'Create systems that scale to the required capacity based on changes in demand',
			c: 'Enable AWS to automatically select the most cost-effective services',
			d: 'Accelerate the design process because recovery from failure is automated, reducing the need for testing'
		},
		correctAnswer: 'b'
	},
	{
		question: "9-Amazon Elastic Compute Cloud (Amazon EC2) Spot instances are appropriate for which of the following workloads?",
		answers: {
			a: 'Workloads that are only run in the morning and stopped at night',
			b: 'Workloads where the availability of the Amazon EC2 instances can be flexible',
			c: 'Workloads that need to run for long periods of time without interruption',
			d: 'Workloads that are critical and need Amazon EC2 instances with termination protection'
		},
		correctAnswer: 'b'
	},
	{
		question: "10-Which tool can display the distribution of AWS spending?",
		answers: {
			a: 'AWS organizations',
			b: 'Amazon Dev Pay',
			c: 'AWS Trusted Advisor',
			d: 'AWS Cost Explorer'
		},
		correctAnswer: 'd'
	},
	{
		question: "11-A disaster recovery strategy on AWS should be based on launching infrastructure in a separate:",
		answers: {
			a: 'Subnet',
			b: 'AWS Region',
			c: 'AWS edge location',
			d: 'Amazon Virtual Private Cloud (Amazon VPC)'
		},
		correctAnswer: 'b'
	},
	{
		question: "12-Which AWS service is used to as a global content delivery network (CDN) service in AWS?",
		answers: {
			a: 'Amazon SES',
			b: 'Amazon Cloudtrail',
			c: 'Amazon CloudFront',
			d: 'Amazon S3'
		},
		correctAnswer: 'c'
	}//,
	// {
	// 	question: "11-hich too",
	// 	answers: {
	// 		a: 'resp',
	// 		b: 'resp',
	// 		c: 'resp',
	// 		d: 'resp'
	// 	},
	// 	correctAnswer: 'xxx'
	// },
	// {
	// 	question: "Questãp",
	// 	answers: {
	// 		a: 'resp',
	// 		b: 'resp',
	// 		c: 'resp',
	// 		d: 'resp'
	// 	},
	// 	correctAnswer: 'xxx'
	// },
	// {
	// 	question: "11-hich too",
	// 	answers: {
	// 		a: 'resp',
	// 		b: 'resp',
	// 		c: 'resp',
	// 		d: 'resp'
	// 	},
	// 	correctAnswer: 'xxx'
	// },
	// {
	// 	question: "Questãp",
	// 	answers: {
	// 		a: 'resp',
	// 		b: 'resp',
	// 		c: 'resp',
	// 		d: 'resp'
	// 	},
	// 	correctAnswer: 'xxx'
	// }
]

let quizContainer = document.getElementById('quiz')
let resultsContainer = document.getElementById('results')
let submitButton = document.getElementById('submit')

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		let output = []
		
		for(let i = 0; i < questions.length; i++){
			answers = []
			for(letter in questions[i].answers){
				answers.push(
					'<label>'
						+ '<br>'
						+ '<input type="checkbox" name="question' + i + '" value="' + letter + '">'
						+ letter + ') '
						+ questions[i].answers[letter]
						+ '</label>'
						)
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			)
		}
		quizContainer.innerHTML = output.join('')
	}

	function showResults(questions, quizContainer, resultsContainer){
		let answerContainers = quizContainer.querySelectorAll('.answers')
		let userAnswer = ''
		let numCorrect = 0
		
		for(let i = 0; i < questions.length; i++){
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked')||{}).value
			
			if(userAnswer === questions[i].correctAnswer){
				numCorrect++
				answerContainers[i].style.color = 'lightgreen'
			}
			else{
				answerContainers[i].style.color = 'red'
			}
		}
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length
		}

	showQuestions(questions, quizContainer)

	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer)
	}
}
