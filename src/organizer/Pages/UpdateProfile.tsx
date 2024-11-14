import { Input } from "../../components/Fragments/Input"

const UpdateProfile = () => {
    return (
        <div className="p-5">
            <h1 className="text-black font-semibold text-lg"> Update Profile</h1>
            <form action="">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-3 text-black">
                    <Input
                        label="Username"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                    <Input
                        label="Nama Organizer"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                    <Input
                        label="Email"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                    <Input
                        label="No Handphone"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                </div>
                <button className="btn border-0 text-white bg-secondary hover:bg-cyan-900 mt-4"> Update Profile</button>
            </form>


        </div>
    )
}

export default UpdateProfile