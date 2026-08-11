import Title from "../components/Title.jsx";
import { assets } from "../assets/frontend_assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const Contact = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-10 border-t">
                <Title text1={"CONTACT"} text2={"US"} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-8">
                <img
                    src={assets.contact_img}
                    className="w-full md:max-w-120"
                    alt=""
                />
                <div className="flex flex-col justify-center items-start gap-6 text-gray-500">
                    <p className="font-semibold text-xl text-gray-600">
                        Our Store
                    </p>
                    <p>
                        Forever Store, 123 Main Street <br /> New Delhi, 110001
                        <br /> India
                    </p>
                    <p>
                        Tel: (+91) 9876543210 <br /> Email: admin@forever.com
                    </p>
                    <p className="font-semibold text-xl text-gray-600">
                        Careers at Forever
                    </p>
                    <p>Learn more about our teams and job openings.</p>
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                        Explore Jobs
                    </button>
                </div>
            </div>
            <NewsletterBox />
        </div>
    );
};

export default Contact;
