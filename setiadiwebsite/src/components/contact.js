// Contact.js
export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.linkedin.com/in/juliansetiadi/">
                    Linkedin:
                    <span className="font-bold">
                        Julian Setiadi
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://twitter.com/geeksforgeeks">
                    Github:
                    <span className="font-bold">
                        @juliansetiadi
                    </span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://instagram.com/geeks_for_geeks">
                    Email:
                    <span className="font-bold">
                        julian.setiadi@uconn.edu
                    </span>
                </a>
            </div>
        </section>
    );
}
