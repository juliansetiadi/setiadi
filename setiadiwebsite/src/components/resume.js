// resume.js
import acting from '../assets/pdf/acting_resume_1.pdf';
//import coding from '../assets/pdf/coding_resume.pdf'; // Assuming a different PDF for coding

export default function Resume() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl text-green-800 font-bold text-center mb-8">
                My Resumes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl p-4">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl mb-2">Coding Resume</h2>
                    <object
                        data={acting}
                        type="application/pdf"
                        className="w-full h-96 border border-gray-300"
                    ></object>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-xl mb-2">Acting Resume</h2>
                    <object
                        data={acting}
                        type="application/pdf"
                        className="w-full h-96 border border-gray-300"
                    ></object>
                </div>
            </div>
        </div>
    );
}
