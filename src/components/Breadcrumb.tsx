interface BreadcrumbProps {
  currentStep: number
}

const steps = [
  { number: 1, title: "Add Testimonials", description: "Enter customer reviews" },
  { number: 2, title: "Customize Design", description: "Choose theme & colors" },
  { number: 3, title: "Get Your Code", description: "Copy & paste widget" }
]

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentStep }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                  step.number <= currentStep
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-400 border border-gray-600'
                }`}
              >
                {step.number < currentStep ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              
              {/* Step info */}
              <div className="mt-2 text-center">
                <div className={`text-sm font-medium ${
                  step.number <= currentStep ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {step.description}
                </div>
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={`w-20 h-0.5 mx-4 transition-all duration-300 ${
                  step.number < currentStep 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
                    : 'bg-gray-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Breadcrumb