
import { Input } from "../../components/Fragments/Input"

export const UpdatePassword = () => {
    return (
        <div className="p-5">
            <h1 className="text-black font-semibold text-lg"> Update Password</h1>
            <form action="">
                <div className="grid grid-cols-1 gap-3 text-black">
                    <Input
                        label="Masukan Password Lama"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                    <Input
                        label="Masukan Password Baru"
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                    <Input
                        label="Confirm Password "
                        type="email"
                        title="Masukkan Email"
                        variant="bg-slate-100"
                        name="email"
                        value="j"
                    />
                </div>
                <button className="btn border-0 text-white bg-secondary hover:bg-cyan-900 mt-4"> Update Password</button>
            </form>


        </div>
    )
}
