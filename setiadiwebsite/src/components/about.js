// About.js
import aboutPic from '../assets/images/about/aboutPic.jpeg';
import backgroundImage from '../assets/images/about/aboutBackground.jpg'; // Import the background image

export default function About() {
    return (
        <section
            id="about"
            // className="px-10 w-full flex flex-col lg:flex-row py-20 
            //            align-center bg-emerald-200 max-w-5xl mx-auto"
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="flex-1">
                <img src={backgroundImage}
                alt="About"
                    className="w-full h-full bg-cover"/>
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-green-800 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    As I said, I am your friendly
                    neighbourhood osm developer...
                </p>
                <p>
                    I am a passionate self taught developer
                    (which is quite a subjective thing as i learnt from
                    teachers on youtube so does that really counts?
                    idk). I am having an experience of about 4 years
                    and had a deep understanding of creating web products.
                </p>
            </div>
        </section>
    );
}
