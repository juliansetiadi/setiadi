// resume.js
import acting from '../assets/pdf/acting_resume_1.pdf';
import tech from '../assets/pdf/Julian Setiadi Resume.pdf';

export default function Resume() {
    return (
        <div id="resume" className="h-screen w-screen flex flex-col items-center justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full max-w-5xl p-4">
                <div className="flex flex-col items-center h-full w-full">
                    <h2 className="text-xl mb-2">Technical Resume</h2>
                    <div className="w-full h-full overflow-auto border border-gray-300">
                        <object
                            data={tech}
                            type="application/pdf"
                            className="w-full h-full"
                            style={{ height: '80vh' }}
                        ></object>
                    </div>
                </div>
                <div className="flex flex-col items-center h-full w-full">
                    <h2 className="text-xl mb-2">Acting Resume</h2>
                    <div className="w-full h-full overflow-auto border border-gray-300">
                        <object
                            data={acting}
                            type="application/pdf"
                            className="w-full h-full"
                            style={{ height: '80vh' }}
                        ></object>
                    </div>
                </div>
            </div>
        </div>
        );
    }