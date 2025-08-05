import ScrollFadeIn from "../components/ScrollFadeIn";
import TransitionWrapper from "../components/TransitionWrapper";

const Experience = () => {
  return (
    <TransitionWrapper>
      <div className="container mx-auto py-20 px-6 max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent pb-1">Professional Experience</h2>
        <div className="space-y-8">

          <ScrollFadeIn>
            <div className="glass rounded-lg p-6 flex items-center space-x-4">
                <img src="/images/logos/ikim.png" alt="IKIM Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">IKIM, University Hospital Essen, Germany</h4>
                    <p className="text-gray-700 italic mb-2">Intern | Jan 2025 - April 2025</p>
                    <p className="text-gray-600">Worked on Breast Cancer Tumor Subtyping using Graph Neural Networks and Vision Transformers.</p>
                </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.1}>
            <div className="glass rounded-lg p-6 flex items-center space-x-4">
                 <img src="/images/logos/uzh.png" alt="University of Zürich Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">Interactive Visual Data Analysis Group, University of Zürich</h4>
                    <p className="text-gray-700 italic mb-2">Work Student | April 2024 - December 2024</p>
                    <p className="text-gray-600">Involved in a Project focused on Financial Data Analysis.</p>
                </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div className="glass rounded-lg p-6 flex items-center space-x-4">
                 <img src="/images/logos/pdz.jpg" alt="PDZ Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">Product Development Lab, ETH Zürich</h4>
                    <p className="text-gray-700 italic mb-2">Master Thesis | April 2024 - October 2024</p>
                    <p className="text-gray-600">Automating medical device usability testing using activity recognition, object recognition, and LLMs with data from Tobii Pro 3 glasses on a ventilator.</p>
                </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.3}>
            <div className="glass rounded-lg p-6 flex items-center space-x-4">
                 <img src="/images/logos/hitachi.jpg" alt="Hitachi Energy Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">Hitachi Energy</h4>
                    <p className="text-gray-700 italic mb-2">Intern | April 2023 - September 2023</p>
                    <p className="text-gray-600">Researched Physics-Informed Neural Networks (PINNs) to determine power transformer efficiency.</p>
                </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.4}>
            <div className="glass rounded-lg p-6 flex items-center space-x-4">
                 <img src="/images/logos/rre.jpg" alt="RRE Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">Reliability and Risk Engineering Lab, ETH Zürich</h4>
                    <p className="text-gray-700 italic mb-2">Work Student | Jan 2023 - April 2023</p>
                    <p className="text-gray-600">Benchmarking power grid datasets for Graph Neural Networks.</p>
                </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.5}>
             <div className="glass rounded-lg p-6 flex items-center space-x-4">
                  <img src="/images/logos/tti.jpg" alt="TTI Logo" className="h-12 w-12 object-contain" />
                <div>
                    <h4 className="text-xl font-semibold text-gray-900">Toyota Technological Institute (TTI), Nagoya, Japan</h4>
                    <p className="text-gray-700 italic mb-2">Researcher | June 2020 - March 2021</p>
                    <p className="text-gray-600">Worked on the pedestrian future pose estimation project.</p>
                </div>
            </div>
          </ScrollFadeIn>

        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Experience; 