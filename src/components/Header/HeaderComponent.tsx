"use client";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
    const router = useRouter();

    const handleAdminClick = () => {
        router.push("/admin");
    };

    return (
        <div className="flex h-10 items-center justify-between -mx-8 px-8 bg-white">
            <h1>Attrecto logo</h1>
            <button onClick={handleAdminClick}>Admin</button>
        </div>
    );
};

export default HeaderComponent;
