function NavBar() {
    return (
        <div className="">
            <div className="flex justify-center py-12">
                <h2 className="text-black text-2xl">FM Kitchen</h2>
            </div>
            <div className="flex justify-center">
                <ul className="flex gap-4">
                    <li><a href="#">Feedback</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;