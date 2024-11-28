import { 
    FaFacebook, 
    FaInstagram,
} from "react-icons/fa";

function Section(){
    return(
        <div>
            <div className="flex justify-center align-center mt-8">
                <h2 className="text-4xl">Quality and Delicious Food.</h2>
            </div>

            <div className="flex justify-center gap-2 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61565682562642" target="_blank"><FaFacebook size={32}/></a>
                <a href="https://www.instagram.com/fm_kitch3n/" target="_blank"><FaInstagram size={32}/></a>
            </div>

            <div className="mt-4 flex justify-center">
                <h2 className="font-bold text-2xl">Choose your Meal!</h2>
            </div>
            <div className="flex justify-center mt-4 gap-2">
                <div className="text-center">
                    <div className="p-24 bg-slate-300 rounded-sm">
                    </div>
                    <span>Budget Meal</span>
                </div>
                <div className="text-center">
                    <div className="p-24 bg-slate-300 rounded-sm">
                    </div>
                    <span>Special Meal</span>
                </div>
                <div className="text-center">
                    <div className="p-24 bg-slate-300 rounded-sm">
                    </div>
                    <span>Combo Meal</span>
                </div>
            </div>
        </div>
    );
}

export default Section;