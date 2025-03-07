import aboutPic from '../assets/images/about/aboutPic.jpeg';
import backgroundImage from '../assets/images/about/aboutBackground.jpg'; // Import the background image

export default function About() {
    return (
        <section
            id="about"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100vh', // Set the height to cover the viewport height
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
            <div className="flex flex-col justify-center items-center gap-5 px-6 bg-opacity-50 bg-black text-white p-10 rounded-lg">
                <h4 className="text-xl font-bold">
                    Hi and welcome to
                </h4>
                <h2 className="text-white text-5xl font-bold">
                    My Portfolio Website
                </h2>
                <p className="text-lg">
                    Software Engineer | Web Developer | Content Creator
                </p>
            </div>
        </section>
    );
}